const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("../models/users");
const knexfile = require("../knexfile");
const router = express.Router();

/* GET users listing. */
router.post("/register", async (req, res) => {
  try {
    const user = req.body

    const hash = await hashSynch(user.password, 14)
    user.password = hash

    Users.addUser(user)
      .then(newUser => {
        const token = generateToken(newUser)
        const decodedToken = jwtDecode(token)
        const expiresAt = decodedToken.expiresAt

        res.status(201).json({
          message: "You've successfully registered",
          userInfo: {
            id: newUser.id,
            firstName: newUser.firstName,
            email: newUser.email
          },
          token,
          expiresAt
        })
      })
  } catch (err) {
    res.status(500).json({err})
  }
})

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body

    Users.fetchUserByEmail(email)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        const decodedToken = jwtDecode(token)
        const expiresAt = decodedToken.expiresAt

        res.status(200).json({
          message: "You've successfully logged in!",
          userInfo: {
            id: user.id,
            firstName: user.firstName,
            email: user.email
          },
          token,
          expiresAt
        })
      } else {
        res.status(401).json({
          message: "You've entered invalid credentials!"
        })
      }
    })
  } catch (err) {
    res.status(500).json({ message: "Sorry, but something went wrong" })
  }
})

const generateToken = user => {
  const { id, password } = user

  const payload = {
    id,
    password
  }

  const secret = process.env.JWT_SECRET || "SuperSecretStuff"

  const jwtOptions = {
    expiresIn: "1d"
  }

  return jwt.sign(payload, secret, jwtOptions)
}

module.exports = router

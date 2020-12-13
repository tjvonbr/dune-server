const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtDecode = require("jwt-decode")
const Users = require("../models/users")
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express' });
});

router.post("/register", async (req, res) => {
  try {
    const user = req.body

    const hash = await bcrypt.hashSync(user.password, 14)
    user.password = hash

    Users.addUser(user)
      .then(newUser => {
        const token = generateToken(newUser)
        const decodedToken = jwtDecode(token)
        const expiresAt = decodedToken.exp

        res.status(201).json({
          message: "You've successfully registered",
          userInfo: {
            id: newUser.id,
            firstName: newUser.firstName,
            email: newUser.email
          },
          token,
          expiresAt: expiresAt
        })
      })
  } catch (err) {
    console.log(err)
    res.status(500).json({err})
  }
})

router.post("/login", async (req, res) => {
    let { email, password } = req.body

    Users.fetchUserByEmail(email)
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          const decodedToken = jwtDecode(token)
          const expiresAt = decodedToken.exp
          console.log(expiresAt)

          res.status(200).json({
            message: "You've successfully logged in!",
            userInfo: {
              id: user.id,
              firstName: user.firstName,
              email: user.email
            },
            token,
            expiresAt: expiresAt
          })
        } else {
          res.status(401).json({
            message: "You've entered invalid credentials!"
          })
        }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Sorry, but there was an error logging you in!" })
    })
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

module.exports = router;

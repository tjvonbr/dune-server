const db = require("../data/db-config")

const fetchUsers = () => {
  return db("users")
}

const fetchUserByEmail = email => {
  return db("users").where({ email })
}

const fetchUserById = id => {
  return db("users").where({ id })
}

const addUser = user => {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [ newUser ] = ids
      return fetchUserById(newUser)
    })
}

module.exports = {
  addUser,
  fetchUsers,
  fetchUserByEmail,
  fetchUserById
}
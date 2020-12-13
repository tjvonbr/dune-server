const db = require('../data/db-config')

const fetchQuotes = () => {
  return db("quotes")
}
const fetchQuoteById = id => {
  return db("quotes").where({ id })
}
module.exports = {
  fetchQuotes,
  fetchQuoteById,
}

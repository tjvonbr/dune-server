const express = require("express")
const router = express.Router()
const Quotes = require("../models/quotes.js")

router.get("/", (req, res) => {
  Quotes.fetchQuotes()
    .then(quotes => {
      console.log(quotes)
      res.status(200).json(quotes)
    })
    .catch(err => console.log(err))
})

module.exports = router

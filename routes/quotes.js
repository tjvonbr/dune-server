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

router.get("/:id", (req, res) => {
  const { id } = req.params

  Quotes.fetchQuoteById(id)
    .then(quote => {
      console.log("QUOTE", quote)
      res.status(200).json(quote)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(quote)
    })
})

module.exports = router;

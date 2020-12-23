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
      res.status(200).json(quote)
    })
    .catch(err => {
      res.status(500).json({ message: "Sorry, but there was a problem fetching this quote!" })
    })
})

module.exports = router;

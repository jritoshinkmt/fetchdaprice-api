require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/price/:coin", async (req, res) => {
  const coin = req.params.coin.toLowerCase();
  const currency = req.query.currency || "usd";

  try {
    const response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`,
      {
        params: { symbol: coin.toUpperCase(), convert: currency.toUpperCase() },
        headers: { "X-CMC_PRO_API_KEY": process.env.X_CMC_PRO_API_KEY },
      }
    );

    const price = response.data.data[coin.toUpperCase()].quote[currency.toUpperCase()].price;
    res.json({ coin, currency, price });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      res.status(401).json({ error: "Invalid API key. Please check your configuration." });
    } else if (error.response && error.response.status === 404) {
      res.status(404).json({ error: `Coin ${coin} not found.` });
    } else {
      res.status(500).json({ error: "Unexpected server error. Please try again." });
    }
  }
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
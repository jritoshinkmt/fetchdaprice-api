# fetchdaprice-api
_A simple REST API to fetch cryptocurrency prices using CoinMarketCap._

## Features
- Get the current price of any cryptocurrency.
- Support for multiple currencies (e.g., USD, EUR, JPY).
- Simple to use with `GET` endpoints.  

## Endpoints
### Get Price  
**GET `/price/{coin}`**  
- **Path Parameter:** `coin` (symbol of cryptocurrency, e.g., `btc`, `eth`).  
- **Query Parameter (optional):** `currency` (fiat currency, default: `usd`).  

### Example Request  
`GET /price/btc?currency=eur`  

### Example Response  
```json
{
  "coin": "btc",
  "currency": "eur",
  "price": 123456789
}
```

## Run Locally
1.	Clone the repository.
2.	Run npm install.
3.	Add your CoinMarketCap API key to .env file (X-CMC_PRO_API_KEY).
4.	Run the server using npm start.

--- 

> [!NOTE]
> •	Built using Express.js and Axios.  
> •	Requires CoinMarketCap API key to fetch data.

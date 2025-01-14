# fetchdaprice-api
_A simple REST API to fetch cryptocurrency prices using CoinMarketCap._

## Features
- Fetch current cryptocurrency prices in real-time.
- Support for multiple fiat currencies (e.g., USD, EUR, JPY).
- Easy-to-use `GET` endpoints.
- Built with **Express.js** and **Axios** for efficiency. 

## Endpoints

### Get Price
**GET `/price/{coin}`**
- **Path Parameter**:  
  `coin` - symbol of the cryptocurrency (e.g., `btc`, `eth`).
- **Query Parameter (optional)**:  
  `currency` - fiat currency for conversion (default: `usd`).

#### Example Request (default:USD) & with Query Parameter
```plaintext
GET /price/btc
```

```
GET /price/btc?currency=jpy
```

#### Example Response (default:USD) & with Query Parameter:
```
{
  "coin": "btc",
  "currency": "usd",
  "price": 123456789
}
```

```
{
  "coin": "btc",
  "currency": "jpy",
  "price": 987654321
}
```

## Run Locally
1.	Clone the repository
2.	Run `npm install`
3.	Add your CoinMarketCap API key to .env file:  
`X_CMC_PRO_API_KEY=your_actual_api_key`
5.	Start the server `npm start`

--- 

> [!NOTE]
> **Requires CoinMarketCap API key to fetch data.**

# Product API

A simple Node.js API that receives a list of product objects and returns the total value of all products in the list. Each product object contains the fields `name`, `price`, and `quality`.

## Technologies Used

- Node.js
- Express
- Body-parser

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nikeshsharma192002/product-api.git
   cd product-value-api

2. Install the dependencies:
   ```bash
   npm install

3. Running the Application
   To start the server, run the following command:
   ```bash
   node server.js

The server will start on http://localhost:3000.

## API Endpoint
POST /api/total-value

- Request
  - Headers:
      Content-Type: application/json
  - Body: A JSON array of product objects. Each object should have the following structure:
    ```bash
    [
    {
        "name": "Product 1",
        "price": 10.0,
        "quality": 2
    },
    {
        "name": "Product 2",
        "price": 15.0,
        "quality": 3
    },
    {
        "name": "Product 3",
        "price": 20.0,
        "quality": 1
    } ]

## Example Request
Using Postman, set up the request as follows:
  - URL: http://localhost:3000/api/total-value
  - Method: POST
  - Headers:
    - Content-Type: application/json
  - Body:
    ```bash
    [
    {"name": "Product 1", "price": 10.0, "quality": 2},
    {"name": "Product 2", "price": 15.0, "quality": 3},
    {"name": "Product 3", "price": 20.0, "quality": 1}]

## Example Response
  The response will be a JSON object containing the total value of all products:
  ```bash
    {
      "totalValue": 85
    }

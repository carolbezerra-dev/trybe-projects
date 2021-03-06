# Welcome to the Trybe Wallet project repository!
---
## You can see the final Page right [here](https://trybewallet-kappa.vercel.app/)

# Skills
In this project, we check if you are able to:

   * Create a Redux store, reducers, actions and dispatchers in React applications

   * Connect Redux to React components

   * Create asynchronous actions in your React application that uses Redux.
    
---

## What should be developed

In this project you will develop a portfolio of expenses control with currency converter, when using this application a user should be able to:
   - Add and remove an expense;
   - View a table with your expenses;
   - View the total expenses converted to a currency of choice;

## Development
  
You must develop an application in React that uses Redux as a state manipulation tool.

Through this application, it will be possible to perform the basic operations of creating and manipulating a redux state.

---

## List of requirements

### Login Page

1. Create a login page with the route for this page must be `/`, so that the user can enter their email and password, with an `Enter` button.

### Portfolio Page

2. Create a page for your wallet with the route to this page should be `/wallet`.

3. Create a header for the wallet page that displays the email of the user who logged in, a field with the total expense generated by the list of expenses and a field that shows which exchange is being used, which in this case will be `BRL`.

4. Develop a form to add an expense with:
  * a field for adding expense amount;
  * a field for adding the expense description;
  * a field to add in which currency the expense will be recorded (dropdown, the user must be able to choose between the fields: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', ' LTC ',' JPY ',' CHF ',' AUD ',' CNY ',' ILS ',' ETH 'and' XRP '(apply for API);
  * a field to add which payment method will be used (dropdown, the user must be able to choose between the fields: 'Money', 'Credit card' and 'Debit card');
  * a field to select a category (tag) for the expense (dropdown, the user must be able to choose between the fields: 'Food', 'Leisure', 'Work', 'Transport' and 'Health');
  * button with the text 'Add expense' that saves the expense information in the global state and updates the sum of expenses in the header.

  The expenses saved in Redux will be in a format similar to the following:  
    ```
    expenses: [{
      "id": 0,
      "value": "3",
      "description": "Hot Dog",
      "currency": "USD",
      "method": "Dinheiro",
      "tag": "Alimentação",
      "exchangeRates": {
        "USD": {
          "code": "USD",
          "name": "Dólar Comercial",
          "ask": "5.6208",
          ...
        },
        "CAD": {
          "code": "CAD",
          "name": "Dólar Canadense",
          "ask": "4.2313",
          ...
        },
        "EUR": {
          "code": "EUR",
          "name": "Euro",
          "ask": "6.6112",
          ...
        },
        "GBP": {
          "code": "GBP",
          "name": "Libra Esterlina",
          "ask": "7.2498",
          ...
        },
        "ARS": {
          "code": "ARS",
          "name": "Peso Argentino",
          "ask": "0.0729",
          ...
        },
        "BTC": {
          "code": "BTC",
          "name": "Bitcoin",
          "ask": "60299",
          ...
        },
        "LTC": {
          "code": "LTC",
          "name": "Litecoin",
          "ask": "261.69",
          ...
        },
        "JPY": {
          "code": "JPY",
          "name": "Iene Japonês",
          "ask": "0.05301",
          ...
        },
        "CHF": {
          "code": "CHF",
          "name": "Franco Suíço",
          "ask": "6.1297",
          ...
        },
        "AUD": {
          "code": "AUD",
          "name": "Dólar Australiano",
          "ask": "4.0124",
          ...
        },
        "CNY": {
          "code": "CNY",
          "name": "Yuan Chinês",
          "ask": "0.8278",
          ...
        },
        "ILS": {
          "code": "ILS",
          "name": "Novo Shekel Israelense",
          "ask": "1.6514",
          ...
        },
        "ETH": {
          "code": "ETH",
          "name": "Ethereum",
          "ask": "5184",
          ...
        },
        "XRP": {
          "code": "XRP",
          "name": "Ripple",
          "ask": "1.4",
          ...
        }
      }
    }]
    ```

### Spend Table

5. Develop a table with spending on with a header with the fields Description, Tag, Payment method, Amount, Currency, Exchange used, Amount converted and Conversion currency;

6. Create a button to delete an expense from the table.

---
#VQV

# Welcome to the Front-End Online Store project repository!

---

In this project you will create a simplified version, without persistence in the database, of an **online store**. From these demands, we will have an application where users will be able to:
   - Search products by terms and categories from the _API of Mercado Livre_;
   - Interact with the products sought in order to add and remove them from a shopping cart in different quantities;
   - View details and previous evaluations of a product, as well as create new evaluations;
   - And finally, finalize the (simulated) purchase of the selected items.

### Documentation of the Mercado Livre API

Your _web_ page will consume the data from the _Mercado Livre_ API to search for items from your online store. To perform these searches, you will need to consult the following _endpoints_:

- To list the available categories:
  - Request type: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- To search for items by term:
  - Request type: `GET`
  - $ QUERY search parameter (this parameter must be replaced by the search field value)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- To search for items by category:
  - Request type: `GET`
  - $ CATEGORY_ID search parameter (this parameter must be replaced with the selected category ID)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- To search for items in a category by term:
  - Request type: `GET`
  - $ QUERY search parameter (this parameter must be replaced by the search field value)
  - $ CATEGORY_ID search parameter (this parameter must be replaced with the selected category ID)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

---

### LIST OF REQUIREMENTS

#### 1. IMPLEMENT A FREE MARKET API ACCESS MODULE

#### 2. CREATE EMPTY PRODUCT LISTING PAGE

#### 3. CREATE SHOPPING CART PAGE

#### 4. LIST THE PRODUCT CATEGORIES AVAILABLE VIA API ON THE MAIN PAGE

#### 5. SEARCH FOR TERMS AND RECEIVE A LIST OF PRODUCTS, WITH SUMMARY DATA, ASSOCIATED WITH THESE TERMS

#### 6. SELECT A CATEGORY AND SEE ONLY PRODUCTS FROM THAT CATEGORY

#### 7. CLICK ON THE SUMMARY DISPLAY OF A PRODUCT AND GO TO A SCREEN WITH ITS DETAILED DISPLAY

#### 8. ADD PRODUCTS FROM THE PRODUCT LISTING SCREEN

#### 9. ADD A PRODUCT TO THE CART FROM YOUR DETAILED DISPLAY SCREEN

#### 10. VIEW THE LIST OF PRODUCTS ADDED TO THE CART ON YOUR PAGE AND HANDLE YOUR QUANTITY

#### 11. EVALUATE AND COMMENT ABOUT A PRODUCT ON YOUR DETAILED DISPLAY SCREEN

#### 12. FINALIZE PURCHASE, SEEING A SUMMARY OF IT, FILLING IN MY DATA AND CHOOSING THE PAYMENT METHOD

---

#VQV

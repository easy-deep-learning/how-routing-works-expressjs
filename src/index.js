const express = require('express')
const app = express()
const port = 3000
const productsStub = [
  { id: 1, name: 'iphone 12', price: 600,  slug: 'iphone_12'},
  { id: 1, name: 'iphone 12 mini', price: 500, slug: 'iphone_12_mini' },
  { id: 1, name: 'iphone SE 2020', count: 400, slug: 'iphone_SE_2020' },
]

app.get('/', (req, res) => {
  res.send(`Hello World! Now is ${Date.now()}`)
  
  /*
  *  С главной страницы редирект на Корзину
  * */
  // res.redirect('/cart');
})

/**
 * Обработка HTTP-запроса
 * GET /cart
 */
app.get('/cart', (req, res) => {
  res.json({
    items: [
      { id: 1, name: 'iphone 12', count: 2, total_price: 1200 },
    ],
    comment: 'My comment',
  })
})

/**
 * Обработка HTTP-запроса
 * GET /products
 */
app.get('/products', (req, res) => {
  res.send(productsStub)
})

/**
 * Обработка HTTP-запроса
 * POST /products
 */
app.post('/products', (req, res) => {
  res.send('TODO')
})

/**
 * Обработка HTTP-запроса
 * GET /products/iphone_12
 * GET /products/iphone
 * 
 * и других GET /products/ссылка_на_товар
 */
app.get('/products/:slug', (req, res) => {
  
})

/**
 * Обработка HTTP-запроса
 * PUT /products/iphone_12
 * PUT /products/iphone
 *
 * и других PUT /products/ссылка_на_товар
 */
app.put('/products/:slug', (req, res) => {

})

/**
 * Обработка HTTP-запроса
 * PATCH /products/iphone_12
 * PATCH /products/iphone
 *
 * и других PUT /products/ссылка_на_товар
 */
app.patch('/products/:slug', (req, res) => {

})

/**
 * Обработка HTTP-запроса
 * DELETE /products/iphone_12
 * DELETE /products/iphone
 *
 * и других PUT /products/ссылка_на_товар
 */
app.delete('/products/:slug', (req, res) => {

})

/*
* Для сужности `products` реализован набор CRUD-операций
* - create
* - read
* - update
* - delete
* */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

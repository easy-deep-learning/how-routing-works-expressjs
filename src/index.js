const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3030
const productsStub = [
  { id: 1, name: 'iphone 12', price: 600,  slug: 'iphone_12'},
  { id: 2, name: 'iphone 12 mini', price: 500, slug: 'iphone_12_mini' },
  { id: 3, name: 'iphone SE 2020', count: 400, slug: 'iphone_SE_2020' },
]

// parse application/json
app.use(bodyParser.json())

// Routing
app.get('/', (req, res) => {
  res.send(`Hello World! Now is ${Date.now()}`)
  
  /*
  *  С главной страницы редирект на Корзину
  * */
  // res.redirect('/cart');
})

/*
 * Для сущности `products` реализован набор CRUD-операций
 * - create
 * - read
 * - update
 * - delete
 * */


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
  const data = req.body

  data.id = productsStub.length

  productsStub.push(data)
  
  res.json(data)
})

/**
 * Обработка HTTP-запроса
 * GET /products/iphone_12
 * GET /products/iphone
 * 
 * и других GET /products/ссылка_на_товар
 */
app.get('/products/:slug', (req, res) => {
  const slug = req.params.slug
  
  const product = productsStub.find((product) => {
    return product.slug === slug
  })
  
  res.json(product)
})

/**
 * Обработка HTTP-запроса
 * PUT /products/iphone_12
 * PUT /products/iphone
 *
 * и других PUT /products/ссылка_на_товар
 */
app.put('/products/:slug', (req, res) => {
  const slug = req.params.slug
  const data = req.body

  const product = productsStub.find((product) => {
    return product.slug === slug
  })
  
  Object.assign(product, data)
  
  res.json(data)
})

/**
 * Обработка HTTP-запроса
 * DELETE /products/iphone_12
 * DELETE /products/iphone
 *
 * и других PUT /products/ссылка_на_товар
 */
app.delete('/products/:slug', (req, res) => {
  const slug = req.params.slug

  productsStub.filter((product) => {
    return product.slug !== slug
  })
  
  res.json({})
})

/**
 * Роутинг для остальных сущностей вынесен в роутер
 */
//app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

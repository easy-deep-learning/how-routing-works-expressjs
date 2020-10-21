const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = require('./router')

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`Hello World! Now is ${Date.now()}`)
  
  /*
  *  С главной страницы редирект на Корзину
  * */
  // res.redirect('/cart');
})

/**
 * Роутинг для остальных сущностей вынесен в роутер
 */
app.use(router)

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})

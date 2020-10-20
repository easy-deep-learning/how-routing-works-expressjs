## Демо-приложение

### Как работает роутинг в express.js
Добрый день, друзья!
Сегодня мы разберемся, как работает роутинг в express.js. Для начала вспомним, что такое роутинг и для чего он служит.

#### Что такое роутинг
Роутинг (его еще называют "маршрутизация" или "диспетчеризация") служит для того, чтобы определить, как приложение
отвечает на HTTP-запросы.

За роутинг отвечает Роутер — специальный модуль, который понимает тип и адрес запроса.

Например, вы создаете магазин и хотите, чтобы по адресу `www.my-super-store.com/products` открывалась страница
со всем товарами. Давайте попробуем сделать это в express.js.

```js
/*
* 1) Создаем новое приложение
*/
const app = express()

/*
* 3) Добавляем роутинг для `/products`
*/
app.get('/products', (req, res) => {
  
  /*
  * 3.1) Добавляем обработчик запроса
  * для примера мы будем просто отсылать демо-данные клиенту через res.json
  */
  res.json(
      [
        { id: 1, name: 'iphone 12', price: 600,  slug: 'iphone_12'},
        { id: 1, name: 'iphone 12 mini', price: 500, slug: 'iphone_12_mini' },
        { id: 1, name: 'iphone SE 2020', count: 400, slug: 'iphone_SE_2020' },
      ]
  )
})
/*
* Все, обработчик HTTP-запроса `GET /products` добавлен.
*/

/*
* 4) Запустим приложение
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```
После запуска приложение будет по запросу `GET /products` отправлять нам наши тестовые данные.

Давайте проверим:
1) В консоли 
```bash
$ curl http://localhost:3000/products
```
2) В браузере — введите в строку адреса `http://localhost:3000/products`

Также можно и добавить обработчики для других типов запроса:
- app.post(...)
- app.put(...)
- app.patch(...)
- app.delete(...)
и остальные HTTP-методы.

[Общий вид](https://expressjs.com/en/4x/api.html#app.METHOD) такого добавления:
```
app.METHOD(path, callback [, callback ...])
```

А что делать с маршрутом, часть которого не известна на момент добавления?
Типичный пример — карточка товара, которая открывается по названию или id.

Роутер позволяет сохранять части маршрута в переменные, указав в `path`
в какую переменную сохранить ту или иную часть. Переменная будет доступна 
в `req.params`. Например, если указать в `path` строку `'/products/:productId'`
то `productId` сохранится в req.params.productId

Смотрите:

```js
app.get('/products/:productId', (req, res) => {
  console.log(req.params.productId)
  // запрос GET /products/123 выведет строку 123
})
```

Параметров может быть несколько:

```js
app.get('/section/:sectionId/category/:categoryId', (req, res) => {
  console.log(req.params)
  // запрос GET /section/gadgets/category/smartphones выведет объект
  // { sectionId: "gadgets", category: "smartphones" }
})
```

В `path` можно указать регулярное выражение, `path` может быть массивом.
Для параметров есть сокращенная запись `app.param`.

Подробности — в документации 
- [Path examples](https://expressjs.com/en/4x/api.html#path-examples),
- [app.param](https://expressjs.com/en/4x/api.html#app.param).



### Дополнительно
- [Express Route Tester](http://forbeslindesay.github.io/express-route-tester)
- [Representational State Transfer — «передача состояния представления»](https://ru.wikipedia.org/wiki/REST)
- [HTTP#Методы](https://ru.wikipedia.org/wiki/HTTP#Методы)
- [CRUD](https://ru.wikipedia.org/wiki/CRUD)

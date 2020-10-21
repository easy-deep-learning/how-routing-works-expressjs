const ProductModel = require('../models/product')

module.exports = (router) => {
  router.get('/products', (req, res, next) => {
    ProductModel
      .readAll(20)
      .then((products) => {
        res.json(products)
      })
      .catch((error) => {
        // @TODO: log error
        res.status(500).send('Something broke!')
      })
  })

  /*
   * CREATE
   * */
  router.post('/products', /* TODO: проверка прав */ (req, res, next) => {
    /**
     * @type {ProductData}
     */
    const data = req.body
    data.created_at = data.updated_at = Date.now()
    
    ProductModel
      .create(data)
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        // @TODO: log error
        res.status(500).send('Something broke!')
      })
  })

  router.route('/products/:id')
    .all((req, res, next) => {
      /*
       * TODO: проверка прав
       * */
    })
    /*
     * READ
     * */
    .get((req, res, next) => {
      const id = parseInt(req.params.id, 10)

      ProductModel
        .readById(id)
        .then((product) => {
          res.json(product)
        })
        .catch((error) => {
          // @TODO: log error
          res.status(500).send('Something broke!')
        })
    })

    /*
     * UPDATE
     * 
     * Может использоваться `patch()`.
     * В чем разница?
     * - patch заменяет часть данных
     * - put заменяет всю сущность
     * */
    .put((req, res, next) => {
      const id = parseInt(req.params.id, 10)
      /**
       * @type {ProductData}
       */
      const data = req.body
      data.updated_at = Date.now()

      ProductModel
        .updateById(id, data)
        .then((product) => {
          res.json(product)
        })
        .catch((error) => {
          // @TODO: log error
          res.status(500).send('Something broke!')
        })
    })

    /*
     * DELETE
     * */
    .delete((req, res, next) => {
      const id = parseInt(req.params.id, 10)

      ProductModel
        .deleteById(id)
        .then((id) => {
          res.json(id)
        })
        .catch((error) => {
          // @TODO: log error
          res.status(500).send('Something broke!')
        })
    })
  
  return router
}

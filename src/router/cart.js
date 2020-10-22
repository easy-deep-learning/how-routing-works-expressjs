module.exports = (router) => {
  
  /*
  * CREATE
  * */
  router.post('/cart', (req, res, next) => {
    
  })
  
  router.route('/cart/:id')
    .all((req, res, next) => {
      /*
      * TODO: проверка прав
      * */
      next()
    })
    /*
    * READ
    * */
    .get((req, res, next) => {
      res.send('get TODO')
    })
    
    /*
     * UPDATE
     * 
     * Может использоваться `put()`.
     * В чем разница?
     * - patch заменяет часть данных
     * - put заменяет всю сущность
     * */
    .patch((req, res, next) => {
      res.send('patch TODO')
    })
    
    /*
     * DELETE
     * */
    .delete((req, res, next) => {
      res.send('delete TODO')
    })
  
  return router
}

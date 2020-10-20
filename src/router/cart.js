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
    })
    /*
    * READ
    * */
    .get((req, res, next) => {})
    
    /*
     * UPDATE
     * 
     * Может использоваться `put()`.
     * В чем разница?
     * - patch заменяет часть данных
     * - put заменяет всю сущность
     * */
    .patch((req, res, next) => {})
    
    /*
     * DELETE
     * */
    .delete((req, res, next) => {})
}

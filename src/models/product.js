const db = require('../../db')
const tableName = 'products'

module.exports = {
  /**
   * @param {ProductData} data
   * @return {Promise<ProductData>}
   */
  create: (data) => {
    const sql = (`
      INSERT INTO ${tableName}
      (
        slug,
        name,
        is_in_store,
        price,
        qty,
        desc,
        main_photo,
        created_at,
        updated_at
      )
      VALUES
      (
        ${data.slug},
        ${data.name},
        ${data.is_in_store},
        ${data.price},
        ${data.qty},
        ${data.desc},
        ${data.main_photo},
        ${data.created_at},
        ${data.updated_at}
      )
    `)

    return new Promise((resolve, reject) => {
      db.run(sql, (error) => {
        if (error) {
          reject(error)
        } else {
          db.close((error) => {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          })
        }
      })
    })
  },

  /**
   * @param {Number} id
   * @param {ProductData} data
   * @return {Promise<ProductData>}
   */
  updateById: (id, data) => {
    const sql = (`
    `)

    return new Promise((resolve, reject) => {
      db.run(sql, (error) => {
        if (error) {
          reject(error)
        } else {
          db.close((error) => {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          })
        }
      })
    })
  },

  /**
   * @param {Number} id
   * @return {Promise<ProductData>}
   */
  readById: (id) => {
    const sql = (`
      SELECT *
      FROM ${tableName}
      WHERE id=${id}
    `)

    return new Promise((resolve, reject) => {
      db.get(sql, (error, row) => {
        if (error) {
          reject(error)
        } else {
          db.close((error) => {
            if (error) {
              reject(error)
            } else {
              resolve(row)
            }
          })
        }
      })
    })
  },

  /**
   * @param {Number} [limit=30]
   * @return {Promise<Array<ProductData>>}
   */
  readAll: (limit = 30) => {
    const sql = (`
      SELECT * 
      FROM ${tableName}
      LIMIT ${limit}
    `)

    return new Promise((resolve, reject) => {
      db.all(sql, (error, rows) => {
        if (error) {
          reject(error)
        } else {
          db.close((error) => {
            if (error) {
              reject(error)
            } else {
              resolve(rows)
            }
          })
        }
      })
    })
  },

  /**
   * 
   * @param {Number} id
   * @return {Promise<Number>}
   */
  deleteById: (id) => {
    const sql = (`
      DELETE from ${tableName}
      WHERE id = ${id}
    `)

    return new Promise((resolve, reject) => {
      db.run(sql, (error) => {
        if (error) {
          reject(error)
        } else {
          db.close((error) => {
            if (error) {
              reject(error)
            } else {
              resolve(id)
            }
          })
        }
      })
    })
  },
}

/**
 * @typedef {Object} ProductData
 * 
 * @property {String} slug
 * @property {String} name
 * @property {Boolean} is_in_store
 * @property {Number} price
 * @property {Number} qty
 * @property {String} desc
 * @property {String} main_photo
 * @property {Number} created_at
 * @property {Number} updated_at
 */

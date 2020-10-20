'use strict'

const table = 'products'
let dbm
let type
let seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  db.createTable(table,
    {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: 'string',
      price: 'int',
      qty: 'int',
      desc: 'string',
    },
  )
}

exports.down = function (db) {
  db.dropTable(table)
}

exports._meta = {
  'version': 1,
}

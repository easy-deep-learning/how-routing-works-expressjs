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

exports.up = (db) => (
  db.createTable(
    table,
    {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      slug: { type: 'string', notNull: true, unique: true },
      name: { type: 'string', notNull: true },
      is_in_store: { type: 'boolean', notNull: true },
      price: 'int',
      qty: 'int',
      desc: 'string',
      main_photo: 'string',

      // @TODO: check up about datetime vs timestamp
      // https://dev.mysql.com/doc/refman/8.0/en/datetime.htmlsqlite
      // https://www.sqlite.org/datatype3.html#date_and_time_datatype
      created_at: 'int',
      updated_at: 'int',
    },
  )
)

exports.down = (db) => db.dropTable(table)

exports._meta = {
  'version': 1,
}

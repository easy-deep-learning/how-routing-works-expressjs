const path = require('path')

/**
 * @see https://github.com/mapbox/node-sqlite3/wiki
 */
const sqlite3 = require('sqlite3').verbose()

/**
 * @return {sqlite3.Database}
 */
module.exports = () => (
  // @TODO: set db according NODE_ENV
  new sqlite3.Database(path.resolve(__dirname, './files/dev.db'))
)


/**
 * @see https://github.com/mapbox/node-sqlite3/wiki
 */
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./files/db.sqlite')

module.exports = db


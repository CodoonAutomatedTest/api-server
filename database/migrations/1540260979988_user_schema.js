'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string("name")
      table.string("phone")
      table.string("role")
      table.date("birthday")
      table.float("score")
      table.float("balance")
      table.integer("page_index")
      table.float("discount")
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

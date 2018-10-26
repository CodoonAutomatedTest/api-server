'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaffSchema extends Schema {
  up () {
    this.create('staff', (table) => {
      table.increments()
      table.timestamps()
      table.string("name")
      table.string("phone")
      table.integer('business_id').unsigned()
      table.foreign('business_id').references("businesses.id")
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema

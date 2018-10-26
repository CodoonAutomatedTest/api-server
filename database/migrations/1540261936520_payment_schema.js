'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.timestamps()
      table.string("name")
      table.float("amount")
      table.integer('business_id').unsigned()
      table.foreign('business_id').references("businesses.id")
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentSchema

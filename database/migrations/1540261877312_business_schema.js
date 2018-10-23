'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BusinessSchema extends Schema {
  up () {
    this.create('businesses', (table) => {
      table.increments()
      table.timestamps()
      table.date('time')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id')
      table.float('price')
      table.integer('payment_id').unsigned()
      table.foreign('payment_id').references("payments.id")
      table.string('staff')
      table.integer('note_id').unsigned()
      table.foreign('note_id').references('notes.id').onDelete("cascade");
    })
  }

  down () {
    this.drop('businesses')
  }
}

module.exports = BusinessSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotesSchema extends Schema {
  up () {
    this.create('notes', (table) => {
      table.increments()
      table.timestamps()
      table.string("picture")
      table.text("tips")
    })
  }

  down () {
    this.drop('notes')
  }
}

module.exports = NotesSchema

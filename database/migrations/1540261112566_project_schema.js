'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.timestamps()
      table.string("name")
      table.float("percent")
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Note extends Model {
    businesses() { 
        return this.belongsTo('App/Models/Business')
    }
}

module.exports = Note

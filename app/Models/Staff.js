'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Staff extends Model {
    businesses() { 
        return this.belongsTo('App/Models/Business')
    }
}

module.exports = Staff

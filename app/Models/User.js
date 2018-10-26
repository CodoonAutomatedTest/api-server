'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
    businesses() { 
        return this.hasMany('App/Models/Business')
    }
}

module.exports = User

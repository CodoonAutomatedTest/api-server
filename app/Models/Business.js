'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Business extends Model {
    user() { 
        return this.belongsTo('App/Models/User')
    }

    project() { 
        return this.belongsTo('App/Models/Project')
    }

    staff() { 
        return this.hasMany('App/Models/Staff')
    }

    payments() { 
        return this.hasMany('App/Models/Payment')
    }

    note() { 
        return this.hasOne('App/Models/Note')
    }
}

module.exports = Business

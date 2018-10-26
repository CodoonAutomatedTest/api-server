'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')

class UserFinder {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, params: { id } }, next) {
    const customer = await User.find(id)
    if (!customer) {
      return response.status(404).json({
        message: 'user not found.',
        id
      })
    }
    request.params.user = customer

    await next()
  }
}

module.exports = UserFinder

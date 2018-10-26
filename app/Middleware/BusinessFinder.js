'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Business = use('App/Models/Business')

class BusinessFinder {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params: { id } }, next) {
    const business = await Business.find(id)
    if (!business) { 
      return response.status(404).json({
        message: 'business not found.',
        id
      })
    }
    request.params.business = business

    await next()
  }
}

module.exports = BusinessFinder

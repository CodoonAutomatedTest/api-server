'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Staff = use('App/Models/Staff')

class StaffFinder {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params: { id } }, next) {
    const staff = await Staff.find(id)
    if (!staff) {
      return response.status(404).json({
        message: 'staff not found',
        id
      })
    }
    request.params.staff = staff

    await next()
  }
}

module.exports = StaffFinder

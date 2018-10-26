'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Payment = use('App/Models/Payment')

class PaymentFinder {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params: { id } }, next) {
    const payment = await Payment.find(id)
    if (!payment) {
      return response.status(404).json({
        message: 'payment not found',
        id
      })
    }
    request.params.payment = payment

    await next()
  }
}

module.exports = PaymentFinder

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Business = use('App/Models/Business')

/**
 * Resourceful controller for interacting with businesses
 */
class BusinessController {
  /**
   * Show a list of all businesses.
   * GET businesses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    // const businesses = await Business.all()
    const businesses = await Business.query()
      .with('user')
      .with('project')
      .with('staff')
      .with('payments')
      .with('note')
      .fetch()
    response.json({
      message: 'Successfully view businesses lists',
      data: businesses
    })
  }

  /**
   * Create/save a new business.
   * POST businesses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const businessObj = request.post()
    const business = await Business.create(businessObj)
    response.json({
      message: 'Successfully created a business',
      data: business
    })
  }

  /**
   * Display a single business.
   * GET businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response }) {
    const business = request.params.business
    return response.status(200).json({
      message: 'success',
      data: business
    })
  }

  /**
   * Update business details.
   * PUT or PATCH businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const business = request.params.business
    const businessObj = request.post()
    business.merge(businessObj)
    business.save()
    return response.status(200).json({
      message: 'success',
      data: business
    })
  }

  /**
   * Delete a business with id.
   * DELETE businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BusinessController

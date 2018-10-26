'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Staff = use('App/Models/Staff')

/**
 * Resourceful controller for interacting with staff
 */
class StaffController {
  /**
   * Show a list of all staff.
   * GET staff
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const staff = await Staff.query()
      .with('businesses')
      .fetch()
    return response.json({
      message: 'Successfully view staff list',
      data: staff
    })
  }

  /**
   * Create/save a new staff.
   * POST staff
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const staffObj = request.post()
    const staff = await Staff.findOrCreate(staffObj)
    response.json({
      message: 'Successfully created a staff',
      data: staff
    })
  }

  /**
   * Display a single staff.
   * GET staff/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response, params: { id } }) {
    const staff = request.params.staff
    return response.status(200).json({
      message: 'success',
      data: staff
    })
  }

  /**
   * Update staff details.
   * PUT or PATCH staff/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, params: { id } }) {
    const staff = request.params.staff
    const staffObj = request.post()
    staff.merge(staffObj)
    staff.save()

    return response.status(200).json({
      message: 'success',
      data: staff
    })
  }

  /**
   * Delete a staff with id.
   * DELETE staff/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = StaffController

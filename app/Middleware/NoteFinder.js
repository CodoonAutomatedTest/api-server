'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Note = use('App/Models/Note')

class NoteFinder {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params: { id } }, next) {
    const note = await Note.find(id)
    if (!note) {
      return response.status(404).json({
        message: 'note not found',
        id
      })
    }
    request.params.note = note

    await next()
  }
}

module.exports = NoteFinder

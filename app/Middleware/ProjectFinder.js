'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Project = use('App/Models/Project')

class ProjectFinder {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params: { id } }, next) {
    const project = await Project.find(id)
    if (!project) {
      return response.status(404).json({
        message: 'project not found.',
        id
      })
    }
    request.params.project = project

    await next()
  }
}

module.exports = ProjectFinder

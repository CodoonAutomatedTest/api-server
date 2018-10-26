'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Note = use('App/Models/Note')

/**
 * Resourceful controller for interacting with notes
 */
class NoteController {
  /**
   * Show a list of all notes.
   * GET notes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const notes = await Note.all()
    response.json({
      message: 'Successfully view notes list',
      data: notes
    })
  }

  /**
   * Create/save a new note.
   * POST notes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const noteObj = request.post()
    const note = await Note.create(noteObj)
    response.json({
      message: 'Successfully created a note',
      data: note
    })
  }

  /**
   * Display a single note.
   * GET notes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response }) {
    const note = request.params.note
    return response.status(200).json({
      message: 'success',
      data: note
    })
  }

  /**
   * Update note details.
   * PUT or PATCH notes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response }) {
    const note = request.params.note
    const noteObj = request.post()
    note.merge(noteObj)
    note.save()
    return response.status(200).json({
      message: 'success',
      data: note
    })
  }

  /**
   * Delete a note with id.
   * DELETE notes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = NoteController

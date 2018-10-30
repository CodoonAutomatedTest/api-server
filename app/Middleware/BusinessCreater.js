'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Project = use('App/Models/Project')
const Payment = use('App/Models/Payment')
const Note = use('App/Models/Note')
const Staff = use('App/Models/Staff')

class BusinessCreater {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // get a customer
    const username = request.post().username
    const product = request.post().product_name
    const time = request.post().time             // get time
    const price = request.post().price           // get price
    if (!(/^1[345789]\d{9}$/.test(username))) {
      var customer = await User.findOrCreate({ name: username })
    } else { 
      var customer = await User.findOrCreate({ phone: username })
    }
    const project = await Project.findBy({ name: product })

    request.body.time = time
    request.body.user_id = customer.id
    request.body.project_id = project.id
    request.body.price = price

    await next()
    const business_id = response.business.id
    console.log(business_id)
    const payments = JSON.parse(response.payments)
    const note = response.note
    const picture = response.picture
    const staff = response.staff

    payments.forEach(function (val, index, arr) { 
      Payment.create({name:val.name, amount:val.amount, business_id:business_id})
    });
    Note.create({
      tips: note,
      picture: picture,
      business_id: business_id
    })
    Staff.create({
      name: staff,
      business_id: business_id
    })

    return response.status(200).json({
      message: 'Successfully created business.'
    })
  }
}

module.exports = BusinessCreater
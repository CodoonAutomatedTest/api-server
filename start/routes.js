'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// User
Route.get('users', 'UserController.index')
Route.post('users', 'UserController.store')
Route.get('users/:id', 'UserController.show').middleware('userFinder')
Route.patch('users/:id', 'UserController.update').middleware('userFinder')


// Project
Route.get('projects', 'ProjectController.index')
Route.post('projects', 'ProjectController.store')
Route.get('projects/:id', 'ProjectController.show').middleware('projectFinder')
Route.patch('projects/:id', 'ProjectController.update').middleware('projectFinder')

// Staff
Route.get('staff', 'StaffController.index')
Route.post('staff', 'StaffController.store')
Route.get('staff/:id', 'StaffController.show').middleware('staffFinder')
Route.patch('staff/:id', 'StaffController.update').middleware('staffFinder')

// Payment
Route.get('payments', 'PaymentController.index')
Route.post('payments', 'PaymentController.store')
Route.get('payments/:id', 'PaymentController.show').middleware('paymentFinder')
Route.patch('payments/:id', 'PaymentController.update').middleware('paymentFinder')

// Note
Route.get('notes', 'NoteController.index')
Route.post('notes', 'NoteController.store')
Route.get('notes/:id', 'NoteController.show').middleware('noteFinder')
Route.patch('notes/:id', 'NoteController.update').middleware('noteFinder')

// Business
Route.get('businesses', 'BusinessController.index')
Route.post('businesses', 'BusinessController.store')
Route.get('businesses/:id', 'BusinessController.show')
Route.patch('businesses/:id', 'BusinessController.update')
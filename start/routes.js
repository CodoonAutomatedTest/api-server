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

// User
Route.group(() => {
  Route.resource('users', 'UserController').middleware(new Map([[
    ['show', 'update'],
    ['userFinder']
  ]]))
}).prefix('api/v1')

// Project
Route.group(() => {
  Route.resource('projects', 'ProjectController').middleware(new Map([[
    ['show', 'update'],
    ['projectFinder']
  ]]))
}).prefix('api/v1')

// Staff
Route.group(() => {
  Route.resource('staff', 'StaffController').middleware(new Map([[
    ['show', 'update'],
    ['staffFinder']
  ]]))
}).prefix('api/v1')

// Payment
Route.group(() => {
  Route.resource('payments', 'PaymentController').middleware(new Map([[
    ['show', 'update'],
    ['paymentFinder']
  ]]))
}).prefix('api/v1')

// Note
Route.group(() => {
  Route.resource('notes', 'NoteController').middleware(new Map([[
    ['show', 'update'],
    ['noteFinder']
  ]]))
}).prefix('api/v1')

// Business
Route.group(() => {
  Route.post('businesses/add', 'BusinessController.add').middleware('businessCreater')
  Route.resource('businesses', 'BusinessController').middleware(new Map([[
    ['show', 'update'],
    ['businessFinder']
  ]]))
}).prefix('api/v1')
/* eslint-disable no-console, no-undef */
process.env.PORT = process.env.PORT || '9090'

import path from 'path'
import Express from 'express'
import serveStatic from 'serve-static'
import enforceSecure from 'express-sslify'

import configureDevEnvironment from './configureDevEnvironment'

export function start() {
  const serverPort = parseInt(process.env.PORT, 10)
  const baseUrl = process.env.APP_BASEURL || `http://localhost:${serverPort}`

  const app = new Express()

  if (__DEVELOPMENT__) {
    configureDevEnvironment(app)
  }

  // Ensure secure connection in production.
  if (process.env.NODE_ENV === 'production') {
    app.use(enforceSecure.HTTPS({ trustProtoHeader: true }))
  }

  // Use this middleware to server up static files
  app.use(serveStatic(path.join(__dirname, '../dist')))
  app.use(serveStatic(path.join(__dirname, '../public')))

  // The API routes
  app.use((req, res, next) => {
    require('./api').default(req, res, next)
  })

  // Default React application
  app.get('*', (req, res, next) => {
    require('./render').default(req, res, next)
  })

  app.listen(serverPort, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.info('🌍  Listening at %s', baseUrl)
    }
  })
}

/* eslint-disable no-console, no-undef */
process.env.PORT = process.env.PORT || '9090'

import path from 'path'
import Express from 'express'
import serveStatic from 'serve-static'
import enforceSecure from 'express-sslify'

import configureDevEnvironment from './configureDevEnvironment'
import handleRender from './render'

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

  // The leaderboard API route
  app.get('/leaderboard', (req, res) => {
    // TODO: use isomorphic-fetch and GitHub API (using process.env.GITHUB_API_TOKEN) to compute leaders array
    const leaders = [{
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      login: 'octocat',
      count: 12,
    }, {
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      login: 'octocat',
      count: 12,
    }, {
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      login: 'octocat',
      count: 12,
    }]
    res.status(200).json(leaders)
  })

  // Default React application
  app.get('/', handleRender)
  app.listen(serverPort, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.info('🌍  Listening at %s', baseUrl)
    }
  })
}

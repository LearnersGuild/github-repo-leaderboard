/* eslint new-cap: [2, {"capIsNewExceptions": ["Router"]}] */
import express from 'express'
// import fetch from 'isomorphic-fetch'

const app = express.Router()

// The leaderboard API route
app.get('/leaderboard', (req, res) => {
  /* TODO: using isomorphic-fetch, retrieve a collection of commits to a repo from the
   * GitHub API (https://developer.github.com/v3/repos/commits/).
   *
   * Transform the data into an array structured like the one below,
   * where each element (object) contains data for each unique contributor.
   * Each object should contain the following properties:
   *   - avatar_url
   *   - login (username)
   *   - count (the total number of commits made by this author to the repo)
   *
   * For GitHub API authentication, set an auth header in your request:
   *
   * Authorization: Bearer <auth token (process.env.GITHUB_API_TOKEN)>
   */
  const leaders = [{
    avatar_url: 'https://avatars2.githubusercontent.com/u/810438?v=3&s=400',
    login: 'gaearon',
    count: 588,
  }, {
    avatar_url: 'https://avatars3.githubusercontent.com/u/17882?v=3&s=400',
    login: 'timdorr',
    count: 43,
  }, {
    avatar_url: 'https://avatars1.githubusercontent.com/u/6018379?v=3&s=400',
    login: 'ellbee',
    count: 36,
  }]
  res.status(200).json(leaders)
})

export default app

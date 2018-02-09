/* global __CLIENT__ */
// import fetch from 'isomorphic-fetch'
import parseUrl from 'url-parse'

export const FETCH_REPO_LEADERS_REQUEST = 'FETCH_REPO_LEADERS_REQUEST'
export const FETCH_REPO_LEADERS_SUCCESS = 'FETCH_REPO_LEADERS_SUCCESS'
export const FETCH_REPO_LEADERS_FAILURE = 'FETCH_REPO_LEADERS_FAILURE'

const DEFAULT_REPO_OWNER = 'reactjs'
const DEFAULT_REPO = 'redux'
const API_ENDPOINT_PATH_LEADERBOARD = `/leaderboard`

function fetchRepoLeadersRequest() {
  return { type: FETCH_REPO_LEADERS_REQUEST }
}

function fetchRepoLeadersSuccess(leaders) {
  return { type: FETCH_REPO_LEADERS_SUCCESS, leaders }
}

function fetchRepoLeadersFailure(error) {
  return { type: FETCH_REPO_LEADERS_FAILURE, error }
}

export default function fetchRepoLeaders() {
  return (dispatch, getState) => {
    const currentUrl = parseUrl(getState().routing.path || '/', true)
    const currentUrlQuery = currentUrl.query || {}
    const owner = currentUrlQuery.owner || DEFAULT_REPO_OWNER
    const repo = currentUrlQuery.repo || DEFAULT_REPO
    const leaderboardPath = `${API_ENDPOINT_PATH_LEADERBOARD}?owner=${owner}&repo=${repo}`
    const baseUrl = __CLIENT__ ? '' : process.env.APP_BASEURL
    const computeUrl = `${baseUrl}${leaderboardPath}`

    // dispatch action signifying that leaderboard data is being loaded
    dispatch(fetchRepoLeadersRequest())

    // fetch leaderboard data
    // TODO: use isomorphic-fetch and /leaderboard API to compute leaders array,
    // then dispatch the loading success action
    const leaders = []
    dispatch(fetchRepoLeadersSuccess(leaders))

    // handle API errors
    // TODO: process error response as needed and dispatch an appropriate action
    // dispatch(fetchRepoLeadersFailure(error))
  }
}

import {
  FETCH_REPO_LEADERS_REQUEST,
  FETCH_REPO_LEADERS_SUCCESS,
  FETCH_REPO_LEADERS_FAILURE,
} from '../actions/fetchRepoLeaders'

const initialState = {
  leaders: [],
  isLoading: false,
}

export function leaderboard(state = initialState, action) {
  switch (action.type) {
  case FETCH_REPO_LEADERS_REQUEST:
    return Object.assign({}, state, {
      isLoading: true,
    })
  case FETCH_REPO_LEADERS_SUCCESS:
    return Object.assign({}, state, {
      leaders: action.leaders,
      isLoading: false,
    })
  case FETCH_REPO_LEADERS_FAILURE:
    console.error('Fetch repo leaders FAILURE:', action.error)
    return Object.assign({}, state, {
      leaders: [],
      isLoading: false,
    })
  default:
    return state
  }
}

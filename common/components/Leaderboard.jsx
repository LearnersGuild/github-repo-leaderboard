import React, {Component, PropTypes} from 'react'

export default class Leaderboard extends Component {
  /* TODO: render a list of the top 5 committers.
   *
   * Each item in the list should display:
   * - the committer's avatar
   * - the committer's username
   * - the number of commits made to the repo by the committer

   avatar_url: "https://avatars2.githubusercontent.com/u/810438?v=3&s=400"
   count: 588
   login: "gaearon"

   */
  render() {
    const {leaderboard: {isLoading, leaders}} = this.props
    console.log('isLoading:', isLoading)
    console.log('leaders:', leaders)

    return (
      <div className="display-4">
        <ul>
          {leaders.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.avatar_url}/>
                <p>Username: {item.login}</p>
                <p># Commits: {item.count}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Leaderboard.propTypes = {
  leaderboard: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    leaders: PropTypes.array,
  }),
}

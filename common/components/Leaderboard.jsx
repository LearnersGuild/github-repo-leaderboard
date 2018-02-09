import React, {Component, PropTypes} from 'react'

export default class Leaderboard extends Component {
  /* TODO: render a list of the top 5 committers.
   *
   * Each item in the list should display:
   * - the committer's avatar
   * - the committer's username
   * - the number of commits made to the repo by the committer
   */
  render() {
    const {leaderboard: {isLoading, leaders}} = this.props
    console.log('isLoading:', isLoading)
    console.log('leaders:', leaders)

    return (
      <div className="display-4">Implement me :)</div>
    )
  }
}

Leaderboard.propTypes = {
  leaderboard: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    leaders: PropTypes.array,
  }),
}

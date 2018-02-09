## Personas

- **Guest:** an unauthenticated user

## Requirements

- Leaderboard will display a list of the top 5 committers in which each item contains:
  - the committer's avatar
  - the committer's username
  - the number of commits made to the repo by the committer
- The repo for which results are displayed can be specified by passing `owner` and `repo` query string arguments in the API request.

There are _no_ performance requirements for this application.

## User Stories

- [x] As a `Guest`, I can visit the root route of the application to display the leaderboard.
  - [x] set up client-side routing (react-router)
  - [x] create Leaderboard component (react)

- [ ] As a `Guest`, so that I know whether or not my leaderboard is still being computed, I will see an "activity icon" and a "Please wait ..." message on the leaderboard route until the results are ready

- [ ] As a `Guest`, when on the leaderboard route, once my results are ready I will see the avatar, username, and # of commits for each leader
  - [ ] implement `/leaderboard` API endpoint request handler
  - [x] execute `computeLeaderboard` action from Root container
  - [ ] implement `computeLeaderboard` action creator from Root container

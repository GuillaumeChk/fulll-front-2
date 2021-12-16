## Project
[Project page](https://github.com/fulll/developers/blob/master/Frontend/react-level-2.md).

## Installation

Requires [Node.js](https://nodejs.org/). 
Made with [React.js](https://reactjs.org/) v17.0.

Install the dependencies and start the server:

```sh
npm i
npm start
```

## Documentation

Code is in component/GithubSearch.js.

Using [GitHub API](https://docs.github.com/en/rest/reference/search#search-users) search users. 

By default 30 results per query.

### Edge cases

A message will be displayed if no results or in case of exceeding API rate limit (10 requests/min).

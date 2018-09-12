const express = require('express');
const request = require('request-promise-native');

const port = 8080;
const logger = console;
const app = express();
const githubApiUrl = 'https://api.github.com/repos/nodejs/node/commits';

app.get('/', async (req, res) => {
  try {
    const groupedCommits = (await request(githubApiUrl, {
      headers: { 'User-Agent': 'Request-Promise-Native' },
      json: true,
    }))
      // Pull out just the values we need
      .map(({ sha, commit }) => ({
        sha,
        authorName: commit.author.name,
        authorEmail: commit.author.email,
      }))

      // Group by author email
      .reduce((previousGroupedCommits, commit) => {
        const key = commit.authorEmail;

        if (!previousGroupedCommits[key]) {
          return { ...previousGroupedCommits, [key]: [commit] };
        }

        const previousGroup = previousGroupedCommits[key];

        return { ...previousGroupedCommits, [key]: [...previousGroup, commit] };
      }, {});

    res.status(200).json(groupedCommits);
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => logger.info(`Listening on port ${port}`));

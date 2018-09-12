const express = require('express');
const expressHandlebars = require('express-handlebars');
const request = require('request-promise-native');
const groupCommits = require('./lib/groupCommits');
const shaColorHelper = require('./lib/shaColorHelper');

const port = 8080;
const logger = console;
const app = express();
const githubApiUrl = 'https://api.github.com/repos/nodejs/node/commits';

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main', helpers: { shaColorHelper } }));
app.set('view engine', 'handlebars');

app.get('/', async (req, res) => {
  try {
    const githubCommits = await request(githubApiUrl, {
      headers: { 'User-Agent': 'Request-Promise-Native' },
      json: true,
    });

    res.render('index', { groupedCommits: groupCommits(githubCommits) });
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => logger.info(`Listening on port ${port}`));

/**
 * Takes an array of commits returned from the GitHub API and returns an object representing commits
 * group by author name. The keys of the returned object will be the author's name, and the value of
 * each key will be an array of all commit SHAs for the author.
 *
 * @param {object[]} githubCommits An array of GitHub commit objects.
 * @return {object} The commit SHAs group by author name
 */
const groupCommits = githubCommits =>
  githubCommits
    // Pull out just the values we need
    .map(({ sha, commit }) => ({ sha, author: commit.author.name }))

    // Group by author
    .reduce((groupedCommits, commit) => {
      const { sha, author } = commit;

      if (!groupedCommits[author]) {
        return { ...groupedCommits, [author]: [sha] };
      }

      const previousShas = groupedCommits[author];

      return { ...groupedCommits, [author]: [...previousShas, sha] };
    }, {});

module.exports = groupCommits;

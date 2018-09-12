const { expect } = require('chai');
const groupCommits = require('../lib/groupCommits');

const githubCommits = [
  {
    sha: '54e76fb873027cc6089bf8d7359d188d3687909e',
    commit: {
      author: {
        name: 'John Smith',
      },
    },
  },
  {
    sha: '5977f28ebf1855580a2eef46ec609acc6ef5ca07',
    commit: {
      author: {
        name: 'Jane Smith',
      },
    },
  },
  {
    sha: '6a9e776200bc0893d6d17d73488be28178e6f6fe',
    commit: {
      author: {
        name: 'Jane Smith',
      },
    },
  },
];

const groupedCommits = {
  'John Smith': ['54e76fb873027cc6089bf8d7359d188d3687909e'],
  'Jane Smith': [
    '5977f28ebf1855580a2eef46ec609acc6ef5ca07',
    '6a9e776200bc0893d6d17d73488be28178e6f6fe',
  ],
};

describe('The groupCommits function', () => {
  it('groups commit SHAs by author', () =>
    expect(groupCommits(githubCommits)).to.deep.equal(groupedCommits));
});

const { expect } = require('chai');
const shaColorHelper = require('../lib/shaColorHelper');

describe('The shaColorHelper function', () => {
  it('wraps the SHA in a colored span if ending with a number', () =>
    expect(shaColorHelper('c1483bac9496d341dc428105d3c3e4b07600a933')).to.equal(
      '<span style="color: #e6f1f6">c1483bac9496d341dc428105d3c3e4b07600a933</span>',
    ));

  it('does not wrap SHAs that do not end with a number', () =>
    expect(shaColorHelper('922a1b03b638e19d8d29efdaab93d5c9455c02ce')).to.equal(
      '922a1b03b638e19d8d29efdaab93d5c9455c02ce',
    ));
});

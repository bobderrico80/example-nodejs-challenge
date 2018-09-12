/**
 * Handlebars helper that wraps the provided SHA value in a colored-span if the SHA ends with a
 * number.
 *
 * @param {string} sha The SHA to possibly color.
 * @return {string} The wrapped or unwrapped SHA.
 */
const shaColorHelper = (sha) => {
  if (/\d$/.test(sha)) {
    return `<span style="color: #e6f1f6">${sha}</span>`;
  }
  return sha;
};

module.exports = shaColorHelper;

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  let index = null;
  arr.forEach((el, idx) => {
    if (el === '@' && arr[idx + 1] !== '.') {
      index = idx + 1;
    }
  });
  return email.slice(index);
}

module.exports = getEmailDomain;

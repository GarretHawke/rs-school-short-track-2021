/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  const map = new Map();
  let domain = '';
  let newDomains = [];
  for (let i = 0; i < domains.length; i += 1) {
    newDomains = domains[i].split('.').reverse();
    domain = '';
    for (let j = 0; j < newDomains.length; j += 1) {
      domain += `.${newDomains[j]}`;
      if (map.has(domain)) {
        map.set(domain, map.get(domain) + 1);
      } else {
        map.set(domain, 1);
      }
    }
  }
  obj = Object.fromEntries(map);
  return obj;
}

module.exports = getDNSStats;

const crypto = require('crypto');


const generateId = () => {
  const n = Math.random().toString(16).substring(2);
  const str = crypto.randomBytes(16).toString('hex');
  return `_${n}${str}`;
};

module.exports = {
  generateId
};
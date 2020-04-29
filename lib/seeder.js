const idGenerator = require('./id-generator');

const generate = (obj) => {
  const id = idGenerator.generateId();

  if (!!obj && typeof obj !== 'object' && obj.constructor !== Object) {
    console.error('You must provide an object');
    process.exit(1);
  }

  return {
    id,
    ...obj
  };
};

module.exports = {
  generate
};

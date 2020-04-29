const {
  describe,
  it
} = require('mocha');
const { expect } = require('chai');
const seeder = require('./../lib/seeder');

describe('seeder', () => {
  describe('generate method', () => {
    it('should return an object', () => {
      const output = seeder.generate();
      expect(output).to.be.an('object');
    });
    it('should return an object with id', () => {
      const output = seeder.generate();
      expect(output).to.have.property('id');
    });
    it('should return an object with id', () => {
      const output = seeder.generate(undefined);
      expect(output).to.have.property('id');
    });
  });
});

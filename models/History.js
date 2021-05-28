/**
 * Class to store and retrieve the history of math operations.
 * @constructor
 */

class History {
  constructor() {
    this.storage = [];
    this.save = this.save.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  /**
   *
   * @param {number} a
   * @param {number} b
   * @param {string} operation String should be one of the following: 'add', 'subtract', 'multiply', or 'divide'.
   * @param {number} answer
   * @returns {Promise<Object>} A promise that resolves to '1 Record Added OK'
   */
  save(a, b, operation, answer) {
    let entry = {
      a,
      b,
      operation,
      answer,
    };
    this.storage.push(entry);
    return Promise.resolve('1 Record added OK');
  }

  /**
   *
   * @returns {Promise<Object>} Returns a promise that resolves to an array of the math operation history
   */
  getAll() {
    return Promise.resolve(this.storage);
  }
}

module.exports = new History();

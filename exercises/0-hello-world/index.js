/**
 * A very simple function, it greets whatever you tell it to
 *
 * @param {string} thing - the thing to greet
 * @returns {string} a friendly greeting
 *
 * @example
 * const example_1 = hello('Sayed');
 * console.log(example_1); // Hello, Sayed! 
 * const greeting = hello('World');
 * console.log(greeting); // 'Hello, World!'
 *
 */
const hello = (thing) => {
  return `Hello, ${thing}!`;
};


module.exports = hello;

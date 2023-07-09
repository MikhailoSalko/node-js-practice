const [operator, ...arguments] = process.argv.slice(2);
const numbers = arguments.map((el) => Number(el));

module.exports = {
  operator,
  numbers,
};

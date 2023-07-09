class Calculator {
  constructor(op, num) {
    this.op = op;
    this.num = num;
  }
  calculate = (op, numbersArg) => {
    switch (op) {
      case "sum":
        return numbersArg.reduce((acc, el) => acc + el);
      case "sub":
        return numbersArg.reduce((acc, el) => acc - el);
      case "mult":
        return numbersArg.reduce((acc, el) => acc * el);
      case "div":
        return numbersArg.reduce((acc, el) => acc / el);
      default:
        return "Unknow operator";
    }
  };
  init = () => {
    return this.calculate(this.op, this.num);
  };
}

const [operator, ...arguments] = process.argv.slice(2);
const numbers = arguments.map((el) => Number(el));

module.exports = new Calculator(operator, numbers);

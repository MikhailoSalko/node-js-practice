// node basicCalc.js sum 9 9 9
// node basicCalc.js sub 9 8 1
// node basicCalc.js mult 9 2 2
// node basicCalc.js div 9 9 1
const [operator, ...arguments] = process.argv.slice(2);
const numbers = arguments.map((el) => Number(el));

const calculate = (op, numbersArg) => {
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

const result = calculate(operator, numbers);
console.log(result);

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

module.exports = calculate

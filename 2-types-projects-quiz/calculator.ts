{
  /**
   * Let's make a calculator 🧮
   */

  // mine
  //   type SymbolType = "add" | "substract" | "multiply" | "divide" | "remainder";
  //   function calculate(symbol: SymbolType, x: number, y: number): number {
  //     if (symbol === "add") {
  //       return x + y;
  //     } else if (symbol === "substract") {
  //       return x - y;
  //     } else if (symbol === "multiply") {
  //       return x * y;
  //     } else if (symbol === "divide") {
  //       return x / y;
  //     } else {
  //       return x % y;
  //     }
  //   }

  // answer
  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate(command: Command, a: number, b: number): number {
    switch (command) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "remainder":
        return a % b;
      default:
        throw new Error("unknown command");
    }
  }
  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}

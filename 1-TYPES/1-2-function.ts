{
  // Javascript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript ✨
  function fetchNum(id: number): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // New Javascript => Typescript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Steve", "Jobs");
  printName("BJ");

  // Default parameter
  function printMessage(message: string = "default Message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));
}

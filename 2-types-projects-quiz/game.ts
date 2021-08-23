{
  /**
   * Let's make a game 🕹
   */

  // Mine (Wrong)
  // const position = { x: 0, y: 0 };
  // type Position = { x: number; y: number };
  // type Command = "up" | "down" | "left" | "right";
  // function move(command: Command): Position {
  //   switch (command) {
  //     case "up":
  //       return { ...position, y: position.y + 1 };
  //     case "down":
  //       return { ...position, y: position.y - 1 };
  //     case "left":
  //       return { ...position, x: position.x - 1 };
  //     case "right":
  //       return { ...position, x: position.x + 1 };
  //   }
  // }

  // Answer
  const position = { x: 0, y: 0 };
  type Direction = "up" | "down" | "left" | "right";
  function move(direction: Direction) {
    switch (direction) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw new Error(`unknown direction: ${direction}`);
    }
  }

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}

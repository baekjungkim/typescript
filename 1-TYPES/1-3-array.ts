{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 2, 3];
  // readonly 를 이용할 때에 string[] 사용가능 ✨
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // 사용 권장 X
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}

{
  // Array
  const fruits: string[] = ["π", "π"];
  const scores: Array<number> = [1, 2, 3];
  // readonly λ₯Ό μ΄μ©ν  λμ string[] μ¬μ©κ°λ₯ β¨
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // μ¬μ© κΆμ₯ X
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}

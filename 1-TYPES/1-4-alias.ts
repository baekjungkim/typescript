{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "Baekjung";
  const address: Text = "korea";
  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "lime",
    age: 16,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let baekName: Name;
  baekName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}

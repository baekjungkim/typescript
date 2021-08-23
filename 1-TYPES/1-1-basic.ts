{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined => 비었는지 안비었는지 아직 결정되지 않음(명확하지 않음)
  // ⭐️ 보편적으로 null 보다 많이 쓰임
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null => 비어있음(명확)
  // 있거나 없다는 것을 나타낼때 문맥상 맞을 수 있다.
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  // 🚫가능하면 쓰지말것
  let notUsre: unknown = 0;
  notUsre = "he";
  notUsre = true;

  // any 💩
  // 🚫가능하면 쓰지말것
  let anything: any = 0;
  anything = "hello";
  anything = true;

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> sever(log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "kbj" });
  acceptSomeObject({ animal: "dog" });
}

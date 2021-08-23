/**
 * Type Inference (타입 추론)
 * 타입을 명시하지는 않았지만 기본 값을 통해서 타입을 유추할 수 있음.
 * 그러나, 보통 프로젝트에서 함수들이 복잡하기 때문에 정확하게 타입을 명시해주는 것이 좋다.
 */
let text = "hello";
function print(message = "hi") {
  console.log(message);
}
print("hello");

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);

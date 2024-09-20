//조건문 : 조건에 부합하는 코드를 실행하는 문법//
//시작은 if, 중간은 else if, 끝은 else 여야 한다.
// else if는 무한히 사용 가능

// const num = Number(prompt("숫자 입력"));

// if (num > 0) {
//   console.log("입력한 값은 양수임");
// } else if (num == 0) {
//   console.log("0임");
// } else {
//   console.log("입력한 값은 음수임");
// }
// console.log("프래그램 끝");

// const math = Number(prompt("수학 점수 입력 (0~100)"));
// if (math >= 90) {
//   console.log("A");
// } else if (math >= 80) {
//   console.log("B");
// } else if (math >= 70) {
//   console.log("C");
// } else if (math >= 60) {
//   console.log("D");
// } else {
//   console.log("수강철회");
// }

const nnum = Number(prompt("숫자 입력"));
// const isPositive = nnum > 0;
// const isNegative = nnum < 0;
// const isOdd = nnum % 2 == 1;
// const isEven = nnum % 2 == 0;
// if (isPositive && isOdd) {
//   console.log("양의 홀수");
// } else if (isPositive && isEven) {
//   console.log("양의 짝수");
// } else if (isNegative && isOdd) {
//   console.log("음의 홀수");
// } else if (isNegative && isEven) {
//   console.log("음의 짝수");
// } else {
//   console.log("0");
// }

if (nnum > 0 && nnum % 2 == 0) {
  console.log("양의 짝수");
} else if (nnum > 0 && nnum % 2 == 1) {
  console.log("양의 홀수");
} else if (nnum == 0) {
  console.log("0임");
} else if (nnum < 0 && nnum % 2 == -1) {
  console.log("음의 홀수");
} else {
  console.log("음의 짝수");
}

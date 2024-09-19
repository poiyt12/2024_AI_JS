// const a = prompt("첫번째 숫자는?");
// const b = prompt("두번째 숫자는?");
// console.log(`두 수의 합은 ${Number(a) + Number(b)} 입니다.`);

// const a = Number(prompt("첫번째 숫자는?"));
// const b = Number(prompt("두번째 숫자는?"));
// console.log(`두 수의 합은 ${a + b} 입니다.`);

const a = prompt("정사각형 한변의 길이는?");
console.log(`정사각형의 둘레는 ${a * 4} 이고, 넓이는 ${a * a} 입니다.`);
const b = prompt("정삼각형 밑변은?");
const c = prompt("정삼각형 높이는?");
console.log(`정삼각형의 넓이는 ${(b * c) / 2} 입니다.`);
const d = prompt("출생년도는?(ex)1996)");
console.log(`당신의 나이(만나이)는 ${2024 - d} 입니다.`);
const e = prompt("일본 여행 가는데 얼마나 환전할껀가요?");
console.log(`${e * 0.107378}엔 입니다.`);
const f = prompt("반지름은?");
console.log(
  `원의 넓이는 ${Math.round(3.14 * f * f)} 이고, 원의 둘레는 ${Math.round(
    3.14 * f * 2
  )} 입니다.`
);

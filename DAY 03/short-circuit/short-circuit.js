// short circuit

// function popcorn(x) {
//   if (x == 1) {
//     return "일반 팝콘";
//   } else if (x == 2) {
//     return "카라멜 팝콘";
//   } else if (x == 3) {
//     return "치즈팝콘";
//   } else {
//     return "팝콘 없음";
//   }
// }

// const a = Number(prompt("팝콘 123"));
// function popcorn(x) {
//   const menu = {
//     1: "일반팝콘",
//     2: "카라멜팝콘",
//     3: "치즈팝콘",
//   };
//   return menu[x] || "그런팝콘없음";
// }
// console.log(`${popcorn(a)}`);

||[or]

const username = prompt("유저이름입력");
alert(`${username || "Guest"} 님 환영합니다.`);

&&[and]

const c = true && "탕수육";
const d = false && "탕후루";

const isLoggin = prompt("비밀번호 입력") == "1234";
isLoggin && alert("환영합니다.");

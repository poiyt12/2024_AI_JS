const birth = prompt("출생연도가 어떻게 되십니까?(ex : 1996)");
console.log(`${birth <= 2005 ? "성인입니다." : "미성년자입니다."}`);

const height = prompt("키가 어떻게 되십니까?(cm)");
console.log(`${height > 150 ? "탈 수 있습니다." : "탈 수 없습니다."}`);

const anyNumber = prompt("범위 안의 정수를 입력해주세요 ( 10,000 ~ 99,999)");
console.log(`${"anyNumber"}`);

// const anyNumber2 = prompt("아무 정수나 입력하세요.");
// const anyNumber3 = anyNumber2 / 60;
// const anyNumber4 = Math.floor(anyNumber3);
// console.log(`${anyNumber4}분 ${anyNumber2 % 60}초`);

const anyNumber2 = prompt("아무 정수나 입력하세요.");
const anyNumber3 = anyNumber2 / 60;
const anyNumber4 = parseInt(anyNumber3);
console.log(`${anyNumber4}분 ${anyNumber2 % 60}초`);

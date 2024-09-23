// function oddEven(x) {
//   return x % 2 == 1 ? "홀수" : "짝수";
// }
// function isFiveTime(x) {
//   return x % 5 == 0 ? "5의 배수" : "5의 배수가 아님";
// }

// // return > 값을 되돌려주는 거라 함수에 적함.
// // console.log > 함수값을 출력까지 하는 거라서 함수에 적합하지 않음. (굳이? 출력까지 해야하면 사용하는거임)

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
// function popcorn2(x) {
//   return `${x}팝콘`;
// }
// // function stringToArray(a, b, c) {
// //   return [a, b, c];
// // }

// const aa = Number(prompt("정수입력"));
// function aaa(x) {
//   if (x < 10) {
//     return "일의 자리";
//   } else if (x < 100) {
//     return "십의자리";
//   } else if (x < 1000) {
//     return "백의자리";
//   } else {
//     return "너무 큼";
//   }
// }
// console.log(`${aaa(aa)}`);

// // 어떠한 과일이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수

// const fruit = String(prompt("과일이름"));
// function fruitA(x) {
//   return `"${x} 맛 아이스크림"`;
// }
// console.log(`${fruitA(fruit)}`);

// function fruitArray(a, b, c) {
//   return [a, b, c];
// }
// function oddEven1(x) {
//   return x % 2 == 1;
// }

//Quiz

//유저에게 비밀번호 설정 물어보고, 비밀번호가 it or IT 를 포함하면 비밀선호 설정 완료! or 비밀번호 설정 오류!

// const password = it;
// const hasPassword = password.includes(`${it || IT}`);
// const isLoggin = prompt("비밀번호 입력") == `${hasPassword}`;
// isLoggin && alert("환영합니다.");
// if (password == true) {
//   return alert("환영합니다.");
// } else {
//   return alert("비밀번호 오류");
// }
// const password = it;
////////////////////////////////////////////
// const password1 =
// const isLoggin = prompt("비밀번호 입력") == password;
// const password = isLoggin.includes("it") || isLoggin.includes("IT");
// function login(x) {
//   if (x == true) {
//     return isLoggin && alert("환영합니다.");
//   } else {
//     return alert("비밀번호오류.");
//   }
// }
// console.log(login(isLoggin));

// 1. 유저에게 좋아하는 음식을 입력 받고 그 음식을 5번 출력하는 프로그램
// 2. 유저에게 좋아하는 음식과 횟수를 입력받고 그 음식을 횟수번 만큼 출력하는 프로그램
// 3. 유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화, 크면 대문자화 후 출력

// const ques = prompt("좋아하는 음식");
// console.log(alert(ques.repeat(5)));

// const ques2 = prompt("좋아하는 음식");
// const ques3 = prompt("좋아하는 숫자");
// console.log(alert(ques2.repeat(`${ques3}`)));

// const food = prompt("음식 횟수");
// const foodArray = food.split(" ");
// const myFood = foodArray[0];
// const acount = Number(foodArray[1]);
// alert(myFood.repeat(acount));

// const alpha = prompt("알파벳");
// const is6under = alpha.length < 6;
// const result = is6under ? alpha.toLowerCase() : alpha.toUpperCase();
// alert(result);

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.

// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.

// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.

// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// alert(news.split(" "));

// 1. 유저에게 단어를 입력받고. 소문자이면 대문자로, 대문자이면 소문자로
// 2. 유저에게 비밀번호 설정을 물어보고
// 길이가 8~20이 아니면, 비밀번호 길이 오류!
// 시작이 it, IT로 시작 안하면 비밀번호 시작은 it,IT로 시작해야함
// 특수문자 &#@! 중에 하나라도 없으면 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과되면 비밀번호 설정 완료

// const word = prompt("영단어");
// const rr = word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
// alert(rr);

// 내가한거
// const tt1 = prompt("비밀번호뭐임") == `${passw1} && ${passw2} && ${passw3}`;
// const passw1 = 8 <= tt1 <= 20;
// const passw2 = tt1.includes("it") || tt1.includes("IT");
// const passw3 =
//   tt1.includes("@") ||
//   tt1.includes("%") ||
//   tt1.includes("$") ||
//   tt1.includes("#");

// function loginA(x) {
//   if ((x = tt1 = true)) {
//     return alert("환영");
//   } else {
//     return alert("비밀번호 확인좀");
//   }
// }
// console.log(loginA(tt1));

//////쌤

// const pw = prompt("비밀번호뭐임");
// const pwLength = 8 <= pw.length && pw.length < 20;
// const pwWord = pw.startsWith("it") || pw.startsWith("IT");
// const pwSpecial =
//   pw.includes("@") || pw.includes("&") || pw.includes("!") || pw.includes("#");

// if (!pwLength) {
//   alert("비밀번호 길이는 8~20자!");
// } else if (!pwWord) {
//   alert("비밀번호 시작은 it or IT 로 시작해야함!");
// } else if (!pwSpecial) {
//   alert("비밀번호에 @,#,!,& 중 한개는 들어가야함!");
// } else {
//   alert("비밀번호 설정 완료");
// }

// 유저에게 뉴스 기사를 입력받고, 찾고 싶은 단어를 입력 받은 후
// 단어가 있으면 단어가 있습니다. 없으면 단어가 없습니다.

// const news = prompt("뉴스기사");
// const findingWord = prompt("찾고싶은 단어");
// const findingWord2 = news.includes(`${findingWord}`);

// if (!findingWord2) {
//   alert("단어가 없습니다.");
// } else {
//   alert("단어가 있습니다.");
// }
//썜

// const news2 = prompt("뉴스기사");
// const lookingWord = prompt("찾고싶은 단어");

// const lookingword2 = news2.split(" ");
// const msg = lookingword2.includes(lookingWord) ? "단어있음" : "단어없음";
// alert(msg);

//makeCoffee 함수 만들기 [커피 준비 - 커피 완료]
//americano, latte, vanillaLatte 함수 만들어서 합성함수 ㄱㄱ

// const makeCoffee = (x) => {
//   console.log("커피 주문");
//   x();
//   console.log("커피 완료");
// };

// const americano = () => {
//   console.log("원두 준비");
//   console.log("원두 곱게 분쇄");
//   console.log("커피 탬핑");
//   console.log("뜨거운 물 넣기");
//   console.log("아메리카노 양에 맞춰 물 넣기");
// };
// const latte = () => {
//   console.log("원두 준비");
//   console.log("원두 곱게 분쇄");
//   console.log("커피 탬핑");
//   console.log("우유 준비");
//   console.log("라테 양에 맞춰 우유 넣기");
// };
// const vanillaLatte = () => {
//   console.log("원두 준비");
//   console.log("원두 곱게 분쇄");
//   console.log("커피 탬핑");
//   console.log("바닐라 시럽 준비");
//   console.log("바닐라라떼 양에 맞춰 우유와 시럽 넣기");
// };

// makeCoffee(() => {
//   console.log("원두 준비");
//   console.log("원두 곱게 분쇄");
//   console.log("커피 탬핑");
//   console.log("뜨거운 물 넣기");
//   console.log("아메리카노 양에 맞춰 물 넣기");
//   console.log("망고추가");
// });

// 1. [1,2,3,4,5] >> 두배 해주기
// 2. [1,2,3,4,5] >> 홀수면 두배 짝수면 세배
// 3. [1,2,3,4,5] >> 3 이하면 'cherry' 아니면 'watermelon'

// const base = [1, 2, 3, 4, 5];
// const result1 = base.map((x) => {
//   return x * 2;
// });

// const f1 = (x) => {
//   return x % 2 == 1 ? x * 2 : x * 3;
// };
// const result2 = base.map(f1);

// const f2 = (x) => {
//   return x <= 3 ? "🎈" : "🎇";
// };
// const result3 = base.map(f2);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// 1. 문자 길이가 7글자 이상이면 대문자화 아니면 소문자화
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에  있는 알파벳 a를 `🎈`로 바꾸기

// const fruitArray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orenge",
//   "pineapple",
//   "strawberry",
// ];

// const rre1 = fruitArray.map((x) => {
//   return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// });

// const rre2 = fruitArray.map((x) => {
//   return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
// });
// const rre3 = fruitArray.map((x) => {
//   return x.replace("a", "🎈");
// });

// console.log(rre1);
// console.log(rre2);
// console.log(rre3);

// 1. 가을시즌 이벤트로 모든 가격을 10% 할인한 가격으로 변경
// 2. 두유시즌 이벤트로 성분에 두유 강제추가
// 3. 스타벅스 아아 기념 이름이 아메리카노면 2000원 할인된 가격으로 하나 더 추가
// 4. 전메뉴 가격 20% 인상

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "tea"],
  },
];

const q1 = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});

const q2 = starbucks.map((x) => {
  x.ingredients.push("두유");
  return x;
});

const q3 = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
});
const q4 = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);

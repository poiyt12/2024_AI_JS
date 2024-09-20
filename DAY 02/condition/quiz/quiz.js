// 1. 영화 고르기
// 2. 좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economy[8000]
// 3. 팝콘 고르기 - 일반[6000], 카라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30% 할인, 60세 이상 20% 할인

// 영화, 좌석, 팝콘, 음료 총 금액 ~~~ 입니다.

// const movie = Number(
//   prompt("무슨 영화를 보실껀가요? 0. 베테랑2, 1. 에일리언, 2. 사랑의하츄핑")
// );
// const movie1 = ["베테랑2", "에일리언", "사랑의하츄핑"];
// //
// const sheet = Number(
//   prompt(
//     "어떤 좌석을 고르실껀가요? 0. standard, 1. couple, 2. premium, 3. economy"
//   )
// );
// const sheet1 = ["standard", "couple", "premium", "economy"];
// const cost1 = [10000, 20000, 15000, 8000];
// //
// const food = Number(
//   prompt("팝콘 종류 골라주세요. 0. 일반, 1. 카라멜, 2. 치즈, 3. 반반")
// );
// const food1 = ["일반", "카라멜", "치즈", "반반"];
// const cost2 = [6000, 6500, 6500, 7000];
// //
// const juice = Number(
//   prompt("음료 종류 골라주세요. 1. 탄산, 2. 에이드, 3. 커피")
// );
// const juice1 = ["탄산", "에이드", "커피"];
// const cost3 = [2000, 3000, 3000];
// //
// const birth = prompt("나이를 말씀해주세요.");
// //
// const cost4 = if (birth > 60) {console.log(cost1[sheet]*0.8);}
//         else if (birth<13){console.log(cost1[sheet]*0.7);}
//         else console.log(cost1[sheet]);

// console.log(`주문 확인하겠습니다. 영화는 ${movie1[movie]} 이고요, 좌석은 ${
//   sheet1[sheet]
// } 입니다. 주문하신 팝콘과 음료는
//     ${food1[food]}, ${juice1[juice]} 입니다.

//     총 금액은 ${ + cost2[food] + cost3[juice]} 입니다.);

// const teather = {
//   name: ["베테랑", "에일리언", "사랑의하츄핑"],
//   seat: {
//     name: ["standard", "couple", "premium", "economy"],
//     price: [10000, 20000, 15000, 8000],
//   },
// };
// const shop = {
//   name: ["일반", "카라멜", "치즈", "반반"],
//   price: [6000, 6500, 6500, 7000],
// };
const movie = {
  name: ["베테랑", "에일리언", "사랑의하츄핑"],
  sheet: [
    { name: "standard", price: 10000 },
    { name: "couple", price: 20000 },
    { name: "premium", price: 15000 },
    { name: "economy", price: 8000 },
  ],
};
const shop = {
  popcorn: [
    { name: "일반팝콘", price: 6000 },
    { name: "카라멜팝콘", price: 6500 },
    { name: "치즈팝콘", price: 6500 },
    { name: "반반팝콘", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};
const movieChoise = Number(prompt(`${movie.name} 중 영화를 고르세요 (0~2)`));
const sheetChoise = Number(
  prompt(
    `${movie.sheet[0].name} ${movie.sheet[1].name} ${movie.sheet[2].name} ${movie.sheet[3].name} 중에 고르세요.`
  )
);
const shopChoise1 = Number(
  prompt(
    `${shop.popcorn[0].name}, ${shop.popcorn[1].name}, ${shop.popcorn[2].name}, ${shop.popcorn[3].name} 중에 고르세요.`
  )
);
const shopChoise2 = Number(
  prompt(
    `${shop.beverage[0].name}, ${shop.beverage[1].name}, ${shop.beverage[2].name} 중에 고르세요.`
  )
);
const age = Number(prompt("연세를 적어주세요."));

const msg = `${movie.name[movieChoise]},${movie.sheet[sheetChoise].name} ${shop.popcorn[shopChoise1].name}, ${shop.beverage[shopChoise2].name}`;

if (age < 13) {
  const total =
    movie.sheet[sheetChoise].price * 0.7 +
    shop.popcorn[shopChoise1].price +
    shop.beverage[shopChoise2].price;
  {
    console.log(`${msg} 총 금액 : ${total} 입니다.`);
  }
} else if (age >= 60) {
  const total =
    movie.sheet[sheetChoise].price * 0.8 +
    shop.popcorn[shopChoise1].price +
    shop.beverage[shopChoise2].price;
  {
    console.log(`${msg} 총 금액 : ${total} 입니다.`);
  }
} else {
  const total =
    movie.sheet[sheetChoise].price +
    shop.popcorn[shopChoise1].price +
    shop.beverage[shopChoise2].price;
  {
    console.log(`${msg} 총 금액 : ${total} 입니다.`);
  }
}
// lexical scope 고급형이나 나중에 찾아보셈.

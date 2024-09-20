// 기본타입 : String, Number, Boolean, Null, Undefined
// 참조타입 : Array [배열]

// const paik = ["아아", "라떼", "모카", "바닐라"];
// console.log(paik);
// console.log(paik[2]);

// 서브웨이
// 길이 15 or 30
// 빵 종류 화이트 하티 파마산오레가노 위트 허니오트 플랫브레드
// 치즈 종류 슈레드, 모짜렐라, 아메리칸치즈
// 소스 머스타드, 핫칠리, 소금, 후추, 스위트어니언
// 쿠키 화이트쿠키 초콜렛쿠키 아몬드쿠키
// 음료 콜라, 제로콜라, 스프라이트, 커피
// 최종메뉴는 길이-빵-치즈-소스-쿠키-음료

// const lt = Number(prompt("길이는 어느정도가 적당하십니까? 0. 15cm, 1. 30cm"));
// const lt1 = ["15cm", "30cm"];
// const bread = Number(
//   prompt(
//     "빵 종류는 어떻게 하십니까? 0. 화이트, 1. 하티, 2. 파마산오레가노, 3. 위트, 4. 허니오트, 5. 플랫브레드"
//   )
// );
// const bread1 = [
//   "화이트,",
//   "하티",
//   "파마산오레가노",
//   "위트",
//   "허니오트",
//   "플랫브레드",
// ];
// const cheese = Number(
//   prompt("치즈 종류는 어떻게 하십니까? 0. 슈레드, 1. 모짜렐라, 2. 아메리칸치즈")
// );
// const cheese1 = ["슈레드,", "모짜렐라", "아메리칸치즈"];
// const suase = Number(
//   prompt("소스 종류는 어떻게 하십니까? 0. 머스타드, 1. 핫칠리, 2. 소금, 후추")
// );
// const sause1 = ["머스타드,", "핫칠리", "소금, 후추"];
// const cookie = Number(
//   prompt(
//     "쿠키 종류는 어떻게 하십니까? 0. 화이트쿠키, 1. 초콜릿쿠키, 2. 아몬드쿠키"
//   )
// );
// const cookie1 = ["화이트쿠키,", "초콜릿쿠키", "아몬드쿠키"];
// const juice = Number(
//   prompt(
//     "음료 종류는 어떻게 하십니까? 0. 콜라, 1. 제로콜라, 2. 스프라이트, 3. 커피"
//   )
// );
// const juice1 = ["콜라,", "제로콜라", "스프라이트", "커피"];
// console.log(
//   `최종 주문은 ${lt1[lt]}, ${bread1[bread]}, ${cheese1[cheese]}, ${sause1[suase]}, ${cookie1[cookie]}, ${juice1[juice]} 입니다.`
// );
//
//
//
// object { p : v }
const coffee = {
  name: "아메리카노",
  price: 3000,
  kcal: 1,
  shop: "벤티",
  isIce: true,
  ingredients: ["커피콩", "물"],
};

console.log(coffee.shop);
console.log(coffee.ingredients[1]);
console.log(coffee.maker);
coffee.amount = 255;
delete coffee.shop;

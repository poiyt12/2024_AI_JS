// General function 구문법]

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

//Arrow fucntion [신문법]
// () => {}
const add1 = (x, y) => {
  return x + y;
};

const subtract1 = (x, y) => {
  return x - y;
};

//  ~~과일 넣으면 ~~맛 아이스크림 돌려주는 함수

const fruit = (x) => {
  return `${x} 맛 아이스크림`;
};

// 문자 3개 넣으면 배열로 돌려주는 함수

const word = (x, y, z) => {
  return [x, y, z];
};

// 숫자를 넣으면 홀수인지 짝수인지 알려주는 함수

const num = (x) => {
  return x % 2 == 1 ? "홀수" : "짝수";
};

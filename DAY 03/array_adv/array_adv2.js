// map[배열요소 바꾸는 함수]

const addten = (x) => {
  return x + 10;
};
const square = (x) => {
  return x ** x;
};
const num1 = [1, 2, 3, 4, 5].map(square);
const num2 = [1, 2, 3, 4, 5].map(addten);
const num3 = [1, 2, 3, 4, 5].map((x) => {
  return x + 100;
});
console.log(num1);
console.log(num2);
console.log(num3);

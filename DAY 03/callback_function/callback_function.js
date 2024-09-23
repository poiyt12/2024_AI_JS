// const cook = (x) => {
//   console.log("요리 시작");
//   x();
//   console.log("요리 끝");
// };

// const maratang = () => {
//   console.log("마라탕 만들기");
// };
// const tako = () => {
//   console.log("타코 만들기");
// };
// const kimbab = () => {
//   console.log("김밥 만들기");
// };

// cook(maratang);
// cook(tako);
// cook(kimbab);

const cook = (recipe) => {
  console.log("요리 시작");
  recipe();
  console.log("요리 끝");
};
const maratang = () => {
  console.log("마라탕 만들기");
};
const tako = () => {
  console.log("타코 만들기");
};
const kimbab = () => {
  console.log("김밥 만들기");
};

recipe(maratang);
recipe(tako);
recipe(kimbab);

//callback [함수안에 함수넣기 : 합성함수]

// 그리드 배열 100개
// const main = document.createElement("main");
// const container = document.createElement("div");
// container.classList.add("container");
// const color = ["red", "orange", "yellow", "green", "blue"];
// Array(100)
//   .fill(0)
//   .forEach((v, i) => {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     box.style.backgroundColor = color[i % color.length];
//     container.appendChild(box);
//   });
// main.appendChild(container);
// document.body.appendChild(main);

// 1. 아메리카노 주문 버튼 태그 만들고 누르면 주문완료! 로바뀌는 버튼 만들기
// const button1 = document.createElement("button");
// button1.classList.add("button1");
// button1.innerText = "아메리카노 주문";
// button1.addEventListener("click", () => {
//   button1.innerText = "주문완료";
// });
// document.body.appendChild(button1);

// 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 버튼 만들기
// const button2 = document.createElement("button");
// button2.classList.add("button2");
// button2.innerText = "아메리카노";
// button2.style.backgroundColor = "skyblue";
// button2.addEventListener("click", () => {
//   button2.style.backgroundColor = "pink";
// });
// document.body.appendChild(button2);

// 3. 버튼 다른색 5개 만들고 버튼 내용은 색깔 이름 넣어야함
//    버튼을 누르면 아래 박스의 색깔로 바뀌어야 함.
// const color = ["red", "orange", "yellow", "green", "blue"];
// Array(5)
//   .fill(0)
//   .forEach((v, i) => {
//     const button3 = document.createElement("button");
//     button3.classList.add("button3");
//     button3.innerText = color[i % color.length];
//     button3.addEventListener("click", () => {
//       button3.innerText = color[(i + 1) % color.length];
//     });
//     button3.style.backgroundColor = color[i % color.length];
//     button3.addEventListener("click", () => {
//       button3.style.backgroundColor = color[(i + 1) % color.length];
//     });
//     document.body.appendChild(button3);
//   });

// const box = document.createElement("div");
// box.style.backgroundColor = "black";
// box.style.width = "100px";
// box.style.height = "100px";
// document.body.appendChild(box);
// const color = ["red", "orange", "yellow", "green", "blue"];
// Array(5)
//   .fill(0)
//   .forEach((v, i) => {
//     const button3 = document.createElement("button");
//     button3.classList.add("button3");
//     button3.innerText = color[i % color.length];
//     button3.style.backgroundColor = color[i % color.length];
//     button3.addEventListener("click", () => {
//       box.style.backgroundColor = button3.style.backgroundColor;
//     });
//     document.body.appendChild(button3);
//   });

// 3. 요약
// const box = document.createElement("div");
// box.style.backgroundColor = "black";
// box.style.width = "100px";
// box.style.height = "100px";
// document.body.appendChild(box);
// ["red", "orange", "yellow", "green", "blue"].forEach((v) => {
//   const button3 = document.createElement("button");
//   button3.classList.add("button3");
//   button3.innerText = v;
//   button3.style.backgroundColor = v;
//   button3.addEventListener("click", () => {
//     box.style.backgroundColor = v;
//   });
//   document.body.appendChild(button3);
// });

// 4. 버튼 2개 추가 '둥글게, 네모'
// const box = document.createElement("div");
// box.style.backgroundColor = "black";
// box.style.width = "100px";
// box.style.height = "100px";
// document.body.appendChild(box);
// ["둥글게", "네모"]
// .forEach((x) => {
//   const button4 = document.createElement("button");
//   button4.classList.add("button4");
//   button4.innerText = x;
//   button4.style.border = "1px solid black";
//   button4.style.gap = "10px";
//   button4.addEventListener("click", () => {
//     box.style.borderRadius = "9999px";
//   });
//   document.body.appendChild(button4);
// })

// ["red", "orange", "yellow", "green", "blue"].forEach((v) => {
//   const button3 = document.createElement("button");
//   button3.classList.add("button3");
//   button3.innerText = v;
//   button3.style.backgroundColor = v;
//   button3.addEventListener("click", () => {
//     box.style.backgroundColor = v;
//   });
//   document.body.appendChild(button3);
// });

//쌤
[
  { name: "네모", radius: "0px" },
  { name: "둥글게", radius: "9999px" },
].forEach((v) => {
  const button4 = document.createElement("button");
  button4.classList.add("button4");
  button4.innerText = v.name;
  button4.addEventListener("click", () => {
    box.style.borderRadius = v.radius;
  });
  document.body.appendChild(button4);
});

["red", "orange", "yellow", "green", "blue"].forEach((v) => {
  const button3 = document.createElement("button");
  button3.classList.add("button3");
  button3.innerText = v;
  button3.style.backgroundColor = v;
  button3.addEventListener("click", () => {
    box.style.backgroundColor = v;
  });
  document.body.appendChild(button3);
});
const box = document.createElement("div");
box.style.backgroundColor = "black";
box.style.width = "100px";
box.style.height = "100px";
document.body.appendChild(box);

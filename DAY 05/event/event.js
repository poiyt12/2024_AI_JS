const button = document.createElement("button");
button.innerText = "아메리카노";
button.addEventListener("click", () => {
  alert("오늘 수요일");
});
document.body.appendChild(button);

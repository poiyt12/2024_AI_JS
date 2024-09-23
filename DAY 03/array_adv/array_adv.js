const arr = ["삼성", "엘지", "에스케이티", "애플", "구글"];

const arr1 = arr.push("현대"); // 뒤에 추가
const arr2 = arr.unshift("하이브"); // 앞에 추가
const arr3 = arr.pop(); // 맨 뒤에 요소 뺴기
const arr4 = arr.shift(); // 맨 앞에 요소 뺴기
const arr5 = arr.reverse(); // 배열 거꾸로 변경
const arr6 = arr.indexOf("엘지"); // 1 [몇번째인지 찾아주는 친구, 없으면 '-1' 이 나옴]
const arr7 = arr.includes("삼성"); // true, false [포함되어 있는지 없는지 판단]

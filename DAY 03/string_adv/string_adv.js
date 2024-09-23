//string_adv

const pizza = "cheese pizza";

//포함하니?
const hasCheese = pizza.includes("cheese"); // true
const hasPine = pizza.includes("pineapple"); // false
const hasC = pizza.includes("c"); // true
const hasEE = pizza.includes("ee"); // true

//몇번째임?
const indexH = pizza.indexOf("h"); // 1
const indexB = pizza.indexOf("b"); // -1

//문자변경해주셈
const rep1 = pizza.replace("z", "a"); // cheese piaza
const rep2 = pizza.replaceAll("z", "a"); // cheese piaaa

// 앞인지 뒤인지
pizza.startsWith("pizza"); // false
pizza.endsWith("pizza"); // true

//소문자대문자
pizza.toUpperCase;
pizza.toLowerCase;

// 나누기
pizza.slice(0, 4); // chee

// 나누기[배열화]
pizza.split("i"); // "cheese p" "zza"
pizza.split(" "); // "cheese" "pizza"

//반복
pizza.repeat(3); // cheese pizza cheese pizza cheese pizza

// 문자의 길이(띄어쓰기 포함)
pizza.length; // 12

// 데이터에 들어가는 값(type) 특징

// 1. "", '', ``(문자열, string) 는 문자로 취금
//ex) "1"+"30" = 130;

//2. const 변수 = 1; 괄호같은 표시가 없으면 숫자(number)로 인식
//ex) 1 + 30 = 31;

//number, string 타입 바꾸기
const a = Number("100");
const b = Number("200");
console.log(a + b);
const c = Number("10");
const d = Number("50");
console.log(c + d);

const aa = String("100");
const bb = String("200");
console.log(aa + bb);

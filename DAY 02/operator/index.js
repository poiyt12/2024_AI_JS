//operator(연산자, [토큰 : 상징적인 무언가 ex) + - * /])

// airth operator [산술 연산자] : +, -, *, **(제곱), /, %(나머지연산), [-]num(부호반대연산자)

// [문자열 연결 연산자] :
// const variable = "치즈" + "떡볶이" > 치즈떡볶이

// const variable = 10 + "떡볶이" > 10떡볶이
// [암묵적 타입 변환]이 일어남, 문자가 하나라도 있으면 숫자를 문자화로 변환

// [대입 연산자] : equal[=] > 데이터 값을 변수에 대입하는 연산자
// cosnt 변수 = "데이터"

// [비교 연산자] : Boolean 타입으로 귀결되는 연산자 (<, >, <=, >=, ==(같다), !=(다르다), ===(타입까지같니?))
// const 변수 = 5 > 3; -> true
// const 변수 = 3 > 5; -> fulse
// const 변수 = 1 == 1; -> true
// const 변수 = 1 != 1; -> fulse
// const 변수 = 1 === 1; ->

// [논리 연산자] : &&(and), ||(or), !(not)
// const varialbe = 5 > 3 && 3 > 1 // true
// const variable = 5 > 1 && 1 > 3 // false
// &&(and) 는 모두 true 여야 true 임

// const varialbe = 5 > 3 || 1 > 3 // true
// ||(or) 은 하나만 true 여도 true 임

// const variable = !false // true
// const varialbe = !!false // false
// const varialbe = !"럭키비키"// false
// const varialbe = !"" // true
// !(not) 은 결과값(boolean 타입 결과[truthy, falsy])을 반대로 변환

// [삼항 연산자] : ?
// const variable = (연산식) ? "true일 경우의 데이터값" : "false일 경우에 데이터값";

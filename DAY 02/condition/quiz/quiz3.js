function name(x) {
  return `hello ${x}님`;
}

function ping(x) {
  return `${x}핑`;
}

function lucky(x) {
  return `${x}이라니 럭키비키잖아`;
}
function sq(x, y) {
  return x ** y;
}
function year(x, y, z) {
  `${x}년도 ${y}월 ${z}일`;
}

// const mbti = {
//   categori: [
//     { name: i, epx: 내향적 },
//     { name: e, epx: 외향적 },
//     { name: s, epx: 감각적 },
//     { name: n, epx: 직감적 },
//     { name: t, epx: 이성적 },
//     { name: f, epx: 감성적 },
//     { name: j, epx: 계획적 },
//     { name: p, epx: 즉흥적 },
//   ],
// };

// const ei = Number(
//   prompt(`${mbti.categori[0].name}, ${bus.categori[1].name} 중 뭔가요? (0, 1)`)
// );
// const sn = Number(
//   prompt(`${mbti.categori[2].name}, ${bus.categori[3].name} 중 뭔가요? (0, 1)`)
// );
// const tf = Number(
//   prompt(`${mbti.categori[4].name}, ${bus.categori[5].name} 중 뭔가요? (0, 1)`)
// );
// const jp = Number(
//   prompt(`${mbti.categori[6].name}, ${bus.categori[7].name} 중 뭔가요? (0, 1)`)
// );

// const msg = `${mbti.categori[ei].name}, ${mbti.categori[ei].epx},
// ${mbti.categori[sn].name}, ${mbti.categori[sn].epx},
// ${mbti.categori[tf].name}, ${mbti.categori[tf].epx},
// ${mbti.categori[jp].name}, ${mbti.categori[jp].epx}`;

function mbti(a, b, c, d) {
  const mbtiMap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이성적",
    p: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtiMap[a]},${mbtiMap[b]},${mbtiMap[c]},${mbtiMap[d]} 이시군요!`;
}

function zodiac(x) {
  const target = Number(year % 12);
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[target]}띠`;
}

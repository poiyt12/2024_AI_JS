const bus = {
  categori: [
    { name: "마을버스", price: 1500 },
    { name: "시내버스", price: 2000 },
    { name: "고속버스", price: 8000 },
    { name: "심야버스", price: 10000 },
  ],
};
const cost = {
  location: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
  sheet: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넥플석", price: 4000 },
  ],
};

const busChoise = Number(
  prompt(
    `${bus.categori[0].name}, ${bus.categori[1].name}, ${bus.categori[2].name}, ${bus.categori[3].name} 중 어떤 버스 타실껀가요? (0~3)`
  )
);
const locationChoise = Number(
  prompt(
    `${cost.location[0].name}, ${cost.location[1].name}, ${cost.location[2].name}, ${cost.location[3].name} 중 어느 지역으로 가실껀가요? (0~3)`
  )
);
const sheetChoise = Number(
  prompt(
    `${cost.sheet[0].name}, ${cost.sheet[1].name}, ${cost.sheet[2].name} 중 어느 좌석 선택하시나요? (0~2)`
  )
);
const age = Number(prompt("연세를 말씀해주세요."));

const msg = `${bus.categori[busChoise].name}, ${cost.location[locationChoise].name}, ${cost.sheet[sheetChoise].name}`;

if (age > 65) {
  const total =
    (bus.categori[busChoise].price +
      cost.location[locationChoise].price +
      cost.sheet[sheetChoise].price) *
    0.5;
  console.log(`${msg}, ${total} 원 입니다.`);
} else if (age <= 13) {
  const total =
    (bus.categori[busChoise].price +
      cost.location[locationChoise].price +
      cost.sheet[sheetChoise].price) *
    0.8;
  console.log(`${msg}, ${total} 원 입니다.`);
} else {
  const total =
    bus.categori[busChoise].price +
    cost.location[locationChoise].price +
    cost.sheet[sheetChoise].price;
  console.log(`${msg}, ${total} 원 입니다.`);
}

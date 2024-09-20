const ediya = [
  {
    korName: "(L)달달커피",
    engName: "(L)Mixed coffee",
    exp: "아주 달달한 커피",
    kcal: 277,
    protein: 2,
    na: 39,
    sugar: 20,
    caffein: 236,
    fat: 9,
    allergy: ["우유"],
  },
  {
    korName: "팥인절미 1인빙수",
    engName: "Red bean injeolmi",
    exp: "팥빙수",
    kcal: 569,
    protein: 11,
    na: 218,
    sugar: 53,
    caffein: 0,
    fat: 6,
    allergy: ["우유", "대두"],
  },
];
const tag = document.createElement("div");

tag.innerHTML = `
    <h4 style="font-size:30px">${ediya[0].korName}</h4>
    <p style="color:grey">${ediya[0].exp}</p>
    <span>${ediya[0].kcal > 250 ? "살찜" : "살안찜"} kcal</span>

`;

document.body.appendChild(tag);

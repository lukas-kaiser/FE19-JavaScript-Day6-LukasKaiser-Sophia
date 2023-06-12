let sandwiches = `{ "sandwich": "Hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let sandwichesParsed = JSON.parse(sandwiches);
let friesParsed = JSON.parse(fries);
console.table(sandwichesParsed);
console.table(friesParsed);

document.write(`My favorite sandwich is a ${sandwichesParsed.sandwich} which has approximately ${sandwichesParsed.calories} calories, along with it I enjoy eating ${friesParsed.fries_size} which have about ${friesParsed.calories} calories.`)
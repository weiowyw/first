
// 1.
const booleanStr = String(true);
console.log(booleanStr);

const numStr = String(1000);
console.log(numStr);

const nullStr = String(null);
console.log(nullStr);

const undefStr = String(undefined);
console.log(undefStr);


// 2.
const strNum = Number("123a");
console.log(strNum);

const secondStrNum = Number("1000");
console.log(secondStrNum);

const nullNum = Number(null);
console.log(nullNum);

const undefNum = Number(undefined);
console.log(undefNum);

const booleanNum = Number(false);
console.log(booleanNum);


// 3.
const nullBoolean = Boolean(null);
console.log(nullBoolean);

const undefBoolean = Boolean(undefined);
console.log(undefBoolean);

const nothingBoolean = Boolean("");
console.log(nothingBoolean);

const zeroBoolean = Boolean(0);
console.log(zeroBoolean);

const emptyBoolean = Boolean(" ");
console.log(emptyBoolean);

const numBoolean = Boolean(1000);
console.log(numBoolean);

const strBoolean = Boolean("1200");
console.log(strBoolean);


// 4.
const value = parseInt(prompt("What is your div's width" ));
console.log(value);
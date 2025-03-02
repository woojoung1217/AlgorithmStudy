const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const times = Number(input[0]);

for (let i = 1; i <= times; i++) {
  let money = parseInt(input[i]);

  let qu = Math.floor(money / 25);
  money %= 25;
  let di = Math.floor(money / 10);
  money %= 10;
  let ni = Math.floor(money / 5);
  money %= 5;

  let penny = money;

  console.log(qu, di, ni, penny)

}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let board = input.slice(1);

const chess1 = [ // 시작이 'B'인 체스판
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB"
];

const chess2 = [ // 시작이 'W'인 체스판
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW"
];

const getRepaintCount = (x, y) => {
  let repaint1 = 0, repaint2 = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[x + i][y + j] !== chess1[i][j]) repaint1++;
      if (board[x + i][y + j] !== chess2[i][j]) repaint2++;
    }
  }

  return Math.min(repaint1, repaint2);
};

let minPaint = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    minPaint = Math.min(minPaint, getRepaintCount(i, j));
  }
}

console.log(minPaint);

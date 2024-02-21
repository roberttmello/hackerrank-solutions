function diagonalDifference(arr) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;
  let n = arr[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) mainDiagonal += arr[i][j];
      if ((i + j) === (n - 1)) secondaryDiagonal += arr[i][j];;
    }
  }
  return Math.abs(mainDiagonal - secondaryDiagonal);
}

let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(matrix));





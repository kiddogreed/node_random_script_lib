let arr = [
  1, 1, 1, 0, 0, 0,
  0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0,
  0, 0, 2, 4, 4, 0,
  0, 0, 0, 2, 0, 0,
  0, 0, 1, 2, 4, 0,
  ]

let max = -63;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let sum = arr[i + 1][j + 1];
        for (let k = 0; k < 3; k++) {
            sum += arr[i][j + k];
            sum += arr[i + 2][j + k]
        }
        if (sum > max) max = sum;
    }
}

 console.log(max)
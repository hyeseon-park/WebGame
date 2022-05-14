let n = 5;
let lost = [4, 2];
let reserve = [3, 5];

console.log(solution(n, lost, reserve));

// 1 1 1
// 0 1 0
// 0 1 1
function solution(n, lost, reserve) {
  let answer = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let arr = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j in lost) {
      if (i + 1 == lost[j]) {
        arr[i] -= 1;
      }
    }
    for (let j in reserve) {
      if (i + 1 == reserve[j]) {
        arr[i] += 1;
      }
    }
  }

  for (let j = 0; j < n; j++) {
    if (arr[j] == 2 && arr[j - 1] == 0) {
      arr[j] -= 1;
      arr[j - 1] += 1;
    }
    if (arr[j] == 2 && arr[j + 1] == 0) {
      arr[j] -= 1;
      arr[j + 1] += 1;
    }
  }

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > 0) {
      answer += 1;
    }
  }

  return answer;
}

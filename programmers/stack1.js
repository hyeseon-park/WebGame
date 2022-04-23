let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));

function solution(progresses, speeds) {
  let ans = [];
  let dev = [];
  for (let i = 0; i < progresses.length; i++) {
    let days = 0;
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      days++;
    }
    dev.push(days);
  }

  let standard = dev.shift();
  let count = 1;

  while (dev.length !== 0) {
    let num = dev.shift();
    if (standard >= num) {
      count++;
    } else {
      ans.push(count);
      standard = num;
      count = 1;
    }
  }
  ans.push(count);

  return ans;
}

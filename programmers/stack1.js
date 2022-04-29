let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));

function solution(progresses, speeds) {
  let ans = [];
  let days = progresses.map((progresses, idx) =>
    Math.ceil((100 - progresses) / speeds[idx])
  );
  let maxDay = days[0];
  console.log(maxDay);
  return ans;
}

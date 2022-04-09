let p = ["leo", "kiki", "eden"];
let c = ["eden", "kiki"];

// solution(p, c);
console.log(solution(p, c));

function solution(participant, completion) {
  const map = new Map();
  for (let i in participant) {
    let a = participant[i];
    let b = completion[i];
    console.log(map.get(a) || 0); //undefined면 0으로
    map.set(a, (map.get(a) || 0) + 1); //참가 +1
    map.set(b, (map.get(b) || 0) - 1); //완주 -1
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

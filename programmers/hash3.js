let clothes = [
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
];

console.log(solution(clothes));

function solution(clothes) {
  let answer = 1;
  const map = new Map();
  for (let i in clothes) {
    let key = clothes[i][1];
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      map.set(key, map.get(key) + 1);
    }
  }
  for (let val of map.values()) {
    answer *= val + 1;
  }
  return answer - 1;
}

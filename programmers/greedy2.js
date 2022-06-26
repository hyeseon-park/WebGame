let name = "JEROEN";

solution(name);

function solution(name) {
  let maxLength = 0;

  const changeAlphabet = (letter) => (letter > 78 ? 91 - letter : letter - 65);

  const findConsecutiveA = (str, i) => {
    let cnt;
    for (cnt = 0; cnt < str.length; cnt++) {
      if (str[cnt] !== "A") break;
    }
    return cnt - (i - 1) > maxLength ? cnt - (i - 1) : maxLength;
  };

  const totalMove = [...name].reduce((totalMove, letter, i) => {
    if (letter !== "A") {
      return totalMove + changeAlphabet(name.charCodeAt(i)) + 1;
    }

    if (i === 0 || name[i - 1] !== "A") {
      maxLength = findConsecutiveA(name.slice(i), i);
    }
    return totalMove + 1;
  }, 0);

  return totalMove - maxLength - 1;
}

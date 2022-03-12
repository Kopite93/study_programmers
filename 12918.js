function solution(s) {
  return s.length == 4 || s.length == 6 ? Boolean(Number(s)) : false;
}

function solution(s) {
  if (s.length == 4 || s.length == 6) {
    return !isNaN(s);
  } else {
    return false;
  }
}

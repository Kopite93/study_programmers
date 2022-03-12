function solution(s) {
  if (s.length == 4) {
    return Boolean(Number(s));
  } else {
    if (s.length == 6) {
      return Boolean(Number(s));
    } else {
      return false;
    }
  }
}

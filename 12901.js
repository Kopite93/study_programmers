function solution(a, b) {
  var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`${a}/${b}/2016`);
  return week[date.getUTCDay()];
}

// function solution(a, b) {
//     let result = new Date(2016,a-1,b).toString().slice(0,3).toUpperCase()
//     return result;
// }

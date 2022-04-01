let left = 24;
let right = 27;

function solution(left, right) {
  let arr = [];
  let numArr = [...Array(right - left + 1).keys()].map((key) => key + left);
  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count += 1;
      }
    }
    arr.push(count);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      numArr[i] = -numArr[i];
    }
  }
  return numArr.reduce((tot, cur) => (tot += cur), 0);
}
console.log(solution(left, right));

// 다른 사람의 풀이
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }

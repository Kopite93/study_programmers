function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 배열 제거 버전 효율성 테스트 실패
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i] == arr[i + 1]) {
        arr.splice(i, 1);
      } else if (arr[j] == arr[j - 1]) {
        arr.splice(j, 1);
      }
    }
    return arr;
  }
}

//다른 사람의 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

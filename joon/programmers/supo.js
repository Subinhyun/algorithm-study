function solution(answers) {
  const answer = [];
  
  //찍는 방식 패턴, 채점표 배열
  const stu1 = [1, 2, 3, 4, 5];
  const stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];
  
  //answer가 있을 때, answer와 비교한 후 문제 맞힌 횟수를 각각 score +1
  for (let i = 0; i < answers.length; i++) {
      if (stu1[i % stu1.length] === answers[i]) {
          score[0]++;
      }
      if (stu2[i % stu2.length] === answers[i]) {
          score[1]++;
      }
      if (stu3[i % stu3.length] === answers[i]) {
          score[2]++;
      }
  }
  
  // 다 돌면 가장 많이 맞힌 사람(math.max)을 배열에 담고  score의 길이만큼 돌아서 max값과 같은 값의 +1를 해서 return
  const max = Math.max(...score);
  //배열 요소 순차 비교
  for (let j = 0; j < score.length; j++) {
      if (score[j] === max) {
          answer.push(j + 1);
      }
  }
  
  return answer;
}
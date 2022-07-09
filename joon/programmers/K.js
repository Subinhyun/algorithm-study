//문제에서 start에서 end까지 자른다고 하였기에 slice()를 이용
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
      answer.push(
          array
              .slice(commands[i][0] - 1, commands[i][1])
              .sort((a, b) => a - b)[commands[i][2] - 1],
      );
  }

  return answer;
}
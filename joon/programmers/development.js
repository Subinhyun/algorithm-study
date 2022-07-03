//progresses: 배포되어야 하는 순서대로 작업의 진도가 담은 배열
//speeds : 각 작업의 개발 속도
//뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발되더라도 앞에 있는 기능이 배포될 때 함께 배포되기 때문에 Queue를 활용
function solution(progresses, speeds) {
  // 각 배포마다 배포되는 기능의 수 배열
  var answer = [];
  // 배포일
  let days = 1;
  // 오늘 배포되는 기능의 수
  let cnt = 0;
  // 현재 기능의 작업 진도
  let progress = 0;
  
  // 작업 반복
  while(progresses[0]){
      // 첫 번째 작업 진도
      progress = progresses[0] + (speeds[0] * days);
      // 첫 번째 작업 진도가 100 이상이면 배포
      if(progress >= 100){
          // 완료된 기능 개수 추가
          cnt++;
          // 완료된 작업 제거
          progresses.shift();
          // 완료된 작업의 속도 제거
          speeds.shift();
      }
      else{
          // 완료된 기능이 있으면
          if(cnt > 0){
              answer.push(cnt);
          }
          // 배포일 증가 (다음날)
          days++;
          // 배포 완료된 기능 개수 초기화
          cnt = 0;
      }
  }
  //  마지막으로 카운트된 배포 완료 기능 개수 push
  answer.push(cnt);
  return answer;
}
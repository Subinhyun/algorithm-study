function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  
  //카펫의 최소높이는 3
  for(let height=3; height<=brown; height++){
      //임의의 높이로 나눌때 나머지가 없을경우
      if(sum % height === 0){
          //가로길이
          let weight = sum / height;
          
          //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
          //결과가 yellow와 같다면 높이와 길이 리턴
          if( (height-2) * (weight-2) === yellow){
              return [weight, height];
          }
      }
  }
  return answer;
}

/*
처음 생각한건 그림을 그려봤을때 갈색의 개수 = ((노란색 가로 * 2)+4) + (노란색 세로 *2)

공식 : 갈색과 노란색의 합을 어떤 높이로 나눌때 나오는 높이와 가로 값을 바탕으로
       (가로-2) * (높이-2) = 노란색이면 현재 높이, 가로의 길이를 찾음
       -2를 해서 곱한 이유는 양끝의 테투리가 갈색이기 때문에 빼고 계산해줌
*/
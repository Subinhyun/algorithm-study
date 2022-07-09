//저널에 등재한 전체 논문에서 많이 인용된 순으로 정렬하고 인용수가 논문수와 같아지거나 인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됨
function solution(citations) {
  citations.sort((a,b)=>b-a);
  for(let i = 0; i < citations.length; i++){ //배열의 길이만큼 반복
      if(i >= citations[i]) return i; // 논문수가 같거나 작을때 
  }
  return citations; //피인용수가 같은 배열에 있으면 
}
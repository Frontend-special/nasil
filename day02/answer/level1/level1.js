/*
배열 나누기
함수 divition은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

필요한 매개변수를 정의하세요
함수내 변수가 필요한다면 해당 변수 부분도 선언 및 정의하세요

매개변수를 어떻게 사용할지 한글로만 작성해보세요
*/

function divition(originArr, divNumber) {
  const arr = originArr;
  const result = [];
  for (let i = 0; i < arr.length; i += divNumber) {
    result.push(arr.slice(i, i + divNumber));
  }
  return result;
}


/*

* 구글링 키워드
  1. 배열을 원하는 길이만큼 나누기
  2. 빈 배열에 값 넣기? 배열 반환?

* 함수 설계 이해
  -splice 말고 slice 쓴 이유는 원본배열을 변경하지 않고 새로운 배열을 리턴 하기 때문. 
  -push() 인자는 배열의 맨 뒷부분에 추가할 요소, 리턴값은 요소가 추가된 새로운 배열의 길이
    : array.push(element1[, ... [, elementN]])
    : push()함수는 하나 이상의 요소를 배열의 가장 마지막에 추가.
    : 원본 배열은 추가한 요소의 수만큼 길이가 늘어나고, 요소가 성공적으로 추가되면 배열의 총 길이를 반환한다.
    >> 즉 배열 i 부터 i+자르고싶은 길이숫자만큼의 요소를 빈배열에 추가해서 반환함.
*/

/* 콘솔찍 찍어보면서 확인+만들어보기

let originArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,22,23,24,25,26,27,28,29,30]
function divide(originArr, divNum) {
   const arr = [];
   for (let i = 0; i< arr.length; i += divNum) {
      //const newArr = arr.slice(i, i+divNum);
      //arr.push(NewArr);
      arr.push(originArr.slice(i, i + divNum));
   }
   return console.log(arr);
}

divide(originArr, 3);

*/

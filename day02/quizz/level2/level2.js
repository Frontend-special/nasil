import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

//a

/*
1. 요구사항
 : 사용자가 입력한 이름 + 연락처의 정보가 data와 일치하는지 확인하고 결과를 보여준다.

2. input 생각하기_어떤값이 필요한지?
 (1) 사용자가 이름과 연락처를 입력하는 input 태그
 (2) 입력한 값이 일치하는지 확인하는 function
    (2-1) 일치하면 예약번호를 노출 할 list 태그
    (2-2) 일치하지 않으면, alert 기능
 (3) 입력 후 input창을 초기화 시키는 function
 
3. 한글로 함수 설계하기
 (1) 입력한 데이터가 RESERVATION_List에 있는 배열에 포함되어 있는지 찾는다. 
    .name && .phone-number 
 (3) 일치하는지 확인한다.
 (4) 일치하면 예약번호가 리스트 형태로 나타난다.
 (4-1) 일치하지 않으면 팝업으로 안내한다.

4. 구글링 키워드
 - 배열에 값 포함 되어있는지 찾는 기능
 - ㅈ

*/

/*
3. input을 토대로 기술 검증
(1) 이미지를 클릭하면 이미지 태그가 display none이 된다.
// javascript 요소 display none

(2) 이미지를 클릭하면 이미지와 겹쳐있던 vidoe 태그가 실행된다.
// javascript video 실행

4. 조건
(1) 이미지 태그와 video 태그를 겹치는 것
    position: absolute
    z-index

(2) 이미지 클릭 함수 
    가. 이미지 클릭시 이미지 displaynone
    나. video 실행
*/
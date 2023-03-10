/* 
페이지네이션 구현하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/


/*
1. 요구사항
 : 페이지네이션을 구현한다

2. input 생각하기_어떤 값이 필요한지?
 (1) 총 게시글의 숫자
 (2) 한 페이지당 몇개의 게시글을 노출할지
 (3) 페이지 블록에 몇개의 페이지 번호를 노출할지 (ex. < 1 2 3 4 5 6 7 8 9 10 > ) 
 (4) 현재 페이지에 대한 URL 주소값


3. 한글로 함수 설계하기
 (1) 페이지 번호(인덱스)에 따른 데이터를 불러오는 function()
 (2) < 버튼 클릭 시 현재 -1 페이지로 이동
    - 첫 페이지에는 < 클릭 비활성화
 (3) > 버튼 클릭 시 현재 +1 페이지로 이동
    - 마지막 페이지에는 > 클릭 비활성화
 (4) 뒤로가기를 눌렀을 때 이전 페이지로 이동

4. 구글링 키워드
 - 자바스크립트 페이지네이션
 - 새로고침 시, 현재 페이지 유지
 - 현재 페이지에 해당하는 게시물만 보여줄 수 있는 
 - 게시물이 추가되면 페이지가 자동으로 추가되는



*/

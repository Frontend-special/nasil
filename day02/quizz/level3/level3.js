/* 
레시피 재료 추가하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기
*/


/*
1. 요구사항
 : 사용자가 입력한 레시피(재료,무게)의 정보를 관리한다(입력,삭제 가능) .

2. input 생각하기_어떤 값이 필요한지?
 (1) 사용자가 입력하는 재료
 (2) 사용자가 입력하는 재요의 무게 
 (3) 입력한 값을 저장하는 테이블 리스트
    (3-1) 동일한 재료를 입력하면, alert 기능
 (4) 입력된 재료를 삭제하는 버튼
    (4-1) 사용자가 선택한 테이블 리스트를 삭제하는 function
 (5) 입력 후 input창을 초기화 시키는 function
 (6) 제출 버튼 클릭 시 레시피 정보를 객체로 반환
 
3. 한글로 함수 설계하기
 (1) 레시피(재료, 무게)를 입력하는 input 태그
 (2) 추가버튼 클릭 시, 기존 테이블의 아래 행을 추가하는 function()
   - 재료명과 용량 값이 입력된다.
   - 마지막은 삭제버튼이 추가된다
 (3) 테이블에 있는 동일한 재료명을 input 하는 경우, alert 기능 '이미 추가된 재료입니다'
 (4) 제출 버튼 클릭 시, 레시피(재료,무게) 정보를 객체로 반환하는 function()

4. 구글링 키워드
 - 테이블 행 추가하는 방법
 - 테이블 행 삭제 방법

*/
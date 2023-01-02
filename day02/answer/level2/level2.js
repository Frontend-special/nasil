import { RESERVATION_LIST } from './reservation .js';
/*
예약 고객 확인하기
*/

const $userNameInput = document.querySelector(["[name='user-name']"]);
const $userPhonInput = document.querySelector(["[name='user-phone']"]);
const $form = document.querySelector('form');
const $reservation = document.querySelector('#reservation-number');

function NodeUserListInReservationList() {
  alert('일치하는 내역이 없습니다');
  $reservation.innerHTML = '일치하는 내역이 없습니다';
}

$userPhonInput.addEventListener('input', (e) => {
  const phone = e.target.value;
  const hiepnPhone = phone
    .replace(/[^0-9]/g, '') // 숫자 >> 0~9 & . 이 ^ 아니라면  ''으로 replace 해줘 (바꾸고 싶은 것을 g로 감싸주기)  
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3') // 3개 - 4개 - 3개 형태로 입력값을 바꿔줘
    .replace(/(\-{1,2})$/g, '');
  e.target.value = hiepnPhone;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = $userNameInput.value;
  const userPhone = $userPhonInput.value;

  const sameNameUser = RESERVATION_LIST.filter((list) => list.name === userName); 
  if (sameNameUser.length === 0) return NodeUserListInReservationList();

  const targetUser = sameNameUser.find((list) => list.phone === userPhone);
  if (!targetUser) return NodeUserListInReservationList();
  $reservation.innerHTML = targetUser.number;
});


/*
* 구글링 키워드
  1. 정규표현식을 통해 [ 문자 검색 / 문자 대체 / 문자 추출 ] 하기
  2. 정규표현식 작성법
  3. input 입력조건 : 숫자 외 데이터는 공백처리
  4. input value 전화번호 형식으로 입력받기 (하이픈 삽입)
  5. 새로운 배열로 반환하는 메소드


* 강사님은 왜 이기능을 썼을까? 목적 결과값
  .filter() : 조건에 맞는(true)인 값을 모두 찾고, 그 값으로 구성된 새로운 배열을 반환
    : 이름의 경우 동명이인이 있을 수 있기 때문

  .find() : 조건에 맞는 값이 나오면 그 값만 걸러준다 (찾으면 끝. 전체를 확인하지 않고 종료됨) 
    : 휴대폰 번호의 경우 고유한 번호이기 때문에 find로 찾으면 훨씬 빠름. 

*/
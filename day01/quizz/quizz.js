import { BANK_LIST, ACCOUNT_FORM } from './mockData.js';
console.log(BANK_LIST, ACCOUNT_FORM);

//0. 은행선택 데이터 불러오기

let bankSelect = document.getElementById('bank-selector');

for(let i = 0; i<Object.values(BANK_LIST).length; i++){
    let addOption = document.createElement('option');
    addOption.innerText = Object.values(BANK_LIST)[i];
    bankSelect.appendChild(addOption);
}

//1. 입력 값 저장하기

let inputBox = document.getElementById('accountInput');  // 계좌입력창
let addBtn = document.getElementById('addBtn');      // 버튼
let accountList = document.getElementById('accountList'); // 계좌번호리스트

console.log("addBtn:",addBtn);
addBtn.addEventListener('click', function(e) {    // 버튼 클릭 이벤트
    console.log("run");
    e.preventDefault();
    let list = document.createElement('li');     // li 만들기
    if (!inputBox.value)            // 내용 없으면 alert
        alert('내용이 입력되지않았습니다.');
    else {
        list.innerText = inputBox.value;  // <li>계좌정보</li>
        accountList.appendChild(list);       // 계좌번호리스트창에 자식요소
        inputBox.value = "";               // 입력 후 입력창 초기화
    }
})


//2. 마스킹처리하기

function masking(accountNum) {
    if (accountNum == undefined || accountNum == '') {
        return '';
    }
    let change = /.{5}$/; //정규식 뒤에서 5글자 마스킹 처리
    return accountNum.replace(change, "*****")
}

//splice slice *split 사용

//정규식 : http://yoonbumtae.com/?p=1865  // 슬래시(/)로 감싸거나, RegExp("정규식")를 사용해서 선언
//replace : 정규식을 만족하는 부분을 찾으면 해당 부분을 다른 텍스트로 대치합니다.
//마침표 (.) : 모든 문자 범위의 한 글자를 뜻합니다. 스페이스나 엔터 등의 화이트스페이스도 포함합니다.

// 길이가 각자 다르면... 길이관련해서 if문을 써야하나?
//아예 은행별로 account form을 다 만들어두고 숫자만 입력되게 해야하는건가..

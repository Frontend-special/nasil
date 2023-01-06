/* 
페이지네이션 구현하기
*/

const $pageList = document.querySelector('.page_list'); //총 페이지 리스트
const $nextPage = document.querySelector('.btn_nav.next');  //현재페이지의 다음페이지
const $prevPage = document.querySelector('.btn_nav.pre');   // 현재페이지의 이전페이지

let totalPage = 80; 
let PAGE_LST = [];
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;    // ? 잘 이해못함. 검색필요

Array.prototype.division = function (div) {
  const arr = this;
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i += div) {
    result.push(arr.slice(i, i + div));
  }
  return result;
};
// 배열나누기하고 동일한 구조

(function pagaNation(totalPage, currentPage) {
  const paageNation_list = [];
  const paageNation_li mit = 10;
  currentPageIndx = Math.ceil(currentPage / paageNation_limit) - 1;
  for (let i = 1; i <= totalPage; i++) {
    paageNation_list.push(i);
  }
  PAGE_LST = paageNation_list.division(paageNation_limit);
  renderPageNation();
})(totalPage, currentPage);

// 페이지네이션 랜더링
function renderPageNation() {
  const pageNationList = PAGE_LST[currentPageIndx];
  $pageList.innerHTML = pageNationList
    .map((page) => {
      return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
    })
    .join('');

  const pageList = document.querySelector('.page_list').children;
  for (let i = 0; i < pageList.length; i++) {
    if (pageList[i].dataset.page == currentPage) {
      pageList[i].classList.add('on');
    }
  }
}

// 넥스트 페이지 그룹
function nextPageGroup() {
  if (!(currentPageIndx < PAGE_LST.length - 1)) return;
  currentPageIndx++;
  renderPageNation();
}

// 이전 페이지 그룹
function prevPageGroup() {
  if (!(currentPageIndx > 0)) return;
  currentPageIndx--;
  renderPageNation();
}

$nextPage.addEventListener('click', nextPageGroup);
$prevPage.addEventListener('click', prevPageGroup);




/*
* 구글링 키워드
  1. URL에서 파라미터 값 가져오는 법



* 강사님은 왜 이기능을 썼을까? 목적 결과값
  

*/
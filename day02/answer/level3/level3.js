/* 
레시피추가하기
*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $button = document.querySelector('#submit_button');
const $list = document.querySelector('#ingredient-list');
const INGREDIENT_LIST = new Map();

// 레시피 삭제하는 함수()
function deleteIngredient(e) {
  if (!e.target.matches('button')) return;
  const $tr = e.target.closest('tr');
  const ingredient = $tr.querySelector('td').textContent;
  $tr.remove();
  INGREDIENT_LIST.delete(ingredient);
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ingredientValue = $ingredient.value;
  const weightValue = $weight.value;
  if (INGREDIENT_LIST.has(ingredientValue)) return alert('이미 존재하는 재료입니다');
  if (!ingredientValue || !weightValue) return alert('입력해주세요');

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  `;

  tr.addEventListener('click', deleteIngredient);

  INGREDIENT_LIST.set(ingredientValue, weightValue);
  $table.append(tr);
  $ingredient.value = '';
  $weight.value = '';
});

// 제출 클릭 시, 현재 테이블 전체 값 추출
$button.addEventListener('click', () => {
  if ($list.children.length > 0) $list.innerHTML = '';
  INGREDIENT_LIST.forEach((weight, ingredient) => {
    const li = document.createElement('li');
    li.innerText = `${ingredient} : ${weight}`;
    $list.append(li);
  });
});


/*

* 구글링 키워드
  1. input창 초기화
  2. td 테이블 행 추가
  3. input value 와 테이블 데이터 간 중복 확인
  4. 테이블 행 값 추출
  
* 강사님은 왜 이기능을 썼을까? 목적 결과값
  .set
  .append
  .for each

*/
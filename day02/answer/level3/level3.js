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
  if ($list.children.length > 0) $list.innerHTML = '';  // #ingredient-list의 자녀요소의 길이가 0보다 클 때, innerHTML을 비워준다
  INGREDIENT_LIST.forEach((weight, ingredient) => {     // foreach를 사용하여 재료 리스트 데이터를 weight와 ingredient 항목을 각각 돌면서
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
  4. 자바스크립트 중복데이터 입력 방지
  5. 테이블 행 값 추출
  
* 강사님은 왜 이기능을 썼을까? 목적 결과값

  .for each : 배열 순회 + 인자로 전달한 함수를 호출하는 반복문. 배열, Set, Map 사용 가능.
    > 제출버튼을 눌렀을 때 전체가 나오게 되는데, for each범위는 최초 콜백 호출 전에 설정.
    > 삭제했거나 버튼 누른 이후 추가한 인덱스 속성에 대해서는 실행하지 않기 때문에 사용한건지?


========================
* TIL !! 

  .set   
    Set 객체는 중복되지 않은 유일한 값들의 집합이다. 
    Set 객체는 배열과 유사하지만, 동일한 값을 중복하여 포함할 수 없고, 인덱스로 요소에 접근하는 것이 불가능하다는 점에서 차이가 있다. 

  .append 와 .appendchild 의 차이

  차이점            append       appendchild      
  -----------------------------------------------
  node object         o               o
  string              o               x
  다수 object         o               x
  return 값           x               o         



  ***정리하기

  종류            Array(배열)     String(문자열)      Object(객체)       HTML콜렉션    Node List     참고
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  for each            O               X                   X                 X              O         배열의 각 요소 순환. 중간에 나오는거 x
  for...in            O               O                   O                 X              X         속성(키값)을 순환. index 배열순회 추천x
  for...of            O               O                   X                 X              O         속성 값 순환
  for                 O               O                   X                 O              O         .lenth 만큼 반복                    

*/
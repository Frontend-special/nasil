/*

변수 위치 찾기
변수 a는 main 함수 안에서만 사용된다
변수 b는 dom api selector로 다른 이벤트에서 사용될 여지가 있다.
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.

*/
let b;

function solution(c) {
  let d;
  d=c;
}
function parse() { }
function main() {
  let a;
  solution('어떤데이터든 상관없음')
  return 반환값;
}
let e = main()



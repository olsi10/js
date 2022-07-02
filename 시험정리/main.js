/* 스프레드 시트 문법 나옴 */

/*

객체 분해하기

구조 분해는 나올 수 있는데
동적 구조 분해같은 복잡하는 건 안 나옴

실행 컨텍스트 - 서술형

중괄호 쓰면 새로운 렉시컬 환경

자바스크립ㅌ츠에서 모든 게 클로저지만

함수를 리턴하는 것을 클로저라고 함

*/

/* 클로저 코드 설명 */
// 전체가 전역 컨텍스트
let a = 100;
function makeCounter() {
  let count = 0;
  return function () {
    console.log(a); //window.alert 윈도우 전역객체 error
    return count++;
  };
}
// 함수 반환
let counter = makeCounter();
console.log(counter());
// 반환받은 함수를 호출

/*

call/apply

this값 앞에 객체가 있고 . 호출 했으면 그 객체
어렵다

그때마다 호출하면서값을 정해줌

바인드는 함수값을 this로 고정해버림

특정한 파라메터를 고정시키는 함수를 만들 수 있음

화살표 함수는 바깥에 있는 this를 빌려옴 



*/

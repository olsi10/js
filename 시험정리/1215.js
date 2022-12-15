// // User라는 함수를 만들고 함수 본문은 생성자 메서드에서 가져옴
// class User {
//     // 생성자 메서드가 없으면 본문이 비워진 상태로 함수 생성
//     constructor(name) { this.name = name; }
//     // sayHi와 같은 클래스 내에서 정의한 메서드를 함수의 prototype 객체에 추가
//     sayHi() { alert(this.name); }
// }

// console.log(typeof User); // function

// console.log(User.prototype) // constructor : User, sayHi : f

// 1. User 라는 이름을 가진 생성자 함수를 만들고 함수 본문은 생성자 메서드 constructor에서 가져오기
// function User(name) {
//     this.name = name;
// }

// // 만약 construcctor에 메서드가 없다면 본문이 비워진 생성자 함수 정의
// // function User(name) {}

// // 2. 클래스 내에서 사용할 메서드를 User.prototype에 정의하기
// User.prototype.sayHi = function() { alert(this.name); }

// // 프로퍼티 두 개 = 생성자, sayHi
// console.log(Object.getOwnPropertyNames(User.prototype));

// // constructor 속성에서는 자기 자신을 가리킴
// console.log(User === User.prototype.constructor);
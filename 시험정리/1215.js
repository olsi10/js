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

// class User {
//     name = "John";
// }

// let user = new User();

// // 개별 객체 user에 name 속성이 추가됨
// alert(user.name); // "John"

// // prototype에 추가되어 공통적으로 사용할 속성이 되는 것이 아님
// alert(User.prototype.name); // undefined

// // prototype에 추가하고 싶다면
// User.prototype.name = "John";

///////////////////////////////////////////////////
// 클래스 필드로 바인딩 된 메서드 만들기
// 자바스크립트는 함수 호출에 따른 this값을 가진다.
// 함수뿐만이 아닌 메서드에도 적용
// 메서드를 전달하여 다른 컨텍스트에서 호출하면 this값은 원래 객체 참조 x

// class Button {
//     constructor(value) {
//         this.value = value;
//     }
//     click() {
//         alert(this.value);
//     }
// }
// let button = new Button("hello");
// // 메서드 전달 (단, 메서드가 전달되어 콜백 함수에서 호출되므로 함수가 호출되는 시점에는
// // this 맥락(점 앞 객체)을 잃게 됨)
// setTimeout(button.click, 1000); // undefined

//////////////////////////////////////////////
// 그럴 때엔 화살표 함수를 사용한다
// 화살표 함수를 쓰면 객체마다 독립적인 함수를 만들고
// 함수의 this를 해당 객체에 바인딩
// 따라서 메서드가 실행되는 맥락에 상관없이 this에 항상 의도한 값이 들어감
// 메서드를 이벤트 리스너로 해야할 때 유용

// class Button {
//     constructor(value) {
//     this.value = value;
//     }
//     // click 메서드를 화살표 함수를 이용해서 정의
//     click = () => {
//     alert(this.value);
//     }
//     nonBinded() {
//     alert(this.value);
//     }
//     }
//     let button1 = new Button("hello");
//     setTimeout(button1.click, 1000); // hello
//     let button2 = new Button("hello");
//     // click 메서드는 화살표 함수로 정의했으므로,
//     // 서로 독립적인 함수 객체 참조를 가지게 됨 (내용은 똑같지만 서로 참조가 다른 독립적인 함수)
//     console.log( button1.click === button2.click ); // false
//     // nonBinded 메서드는 화살표 함수를 이용하지 않고 정의했으므로,
//     // 화살표 함수로 정의하지 않았으므로 함수 객체를 공유
//     console.log( button1.nonBinded === button2.nonBinded ); // true
//     // click은 prototype 객체에도 포함되지 않음
//     console.log( Button.prototype.click );
//     // 그러나 nonBinded는 prototype 객체에 포함됨
//     console.log( Button.prototype.nonBinded )


// Q) 위와 비슷한 방식으로 Shape.prototype 객체를
// 프로토타입 체인에서 검색할 수 있는 Circle 생성자 함수 정의하고
// 고유의 area 메서드 정의하기
// 공식은 π*r^2

// function Circle(r) {
//     this.r = r;
// }

// Circle.prototype.area = function(r) {
//     let width = 3.14 * (r * r); 
//     console.log(`원의 너비는 : ${width}`); 
// }

// function Shape(r) {
//     Circle.call(this, r);
//     this.r = r;
// }

// // [[Prototype]] 을 객체로 가지는 빈 객체 생성
// Shape.prototype = Object.create(Circle);

// // 대입으로 인해 constructor가 사라짐 다시 설정
// Shape.prototype.constructor = Shape;

// // 반지름이 4인 객체
// let c = new Shape(4);
// console.log(c.area);
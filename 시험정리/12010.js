// console.log("terminal test")

// let o = {};
// console.log(o.__proto__);
// console.log(Object.getPrototypeOf(o));
// console.log(o.__proto__ === Object.getPrototypeOf(o)); // true

// 둘은 같은 값을 가진다

// let animal = {
//     isAnimal : true,
//     eat : function(food) {
//         console.log(`${food}를 먹는다`);
//     }
// };

// let dog = {
//     bark : function() {
//         console.log("멍멍");
//     }
// }

// let cat = {
//     meow : function() {
//         console.log("냐용");
//     }
// }

// dog.__proto__ = animal;
// Object.getPrototypeOf(cat, animal);

// dog.bark()
// cat.meow()

// console.log(dog.isAnimal);
// console.log(cat.isAnimal);

// let mom = {
//     isPar : true,
//     say : function() {
//         console.log("엄마");
//     }
// };

// let me = {
//     meSay : function() {
//         console.log("나야");
//     }
// };

// me.__proto__ = mom;
// // Object.getPrototypeOf(me, mom);

// me.meSay();
// me.isPar();

// 속성 -> udefined
// 메서드 -> TypeError

// 보통 프토토타입 객체와 연관된 수행작업은 함수 선언식
// NO!! 화살표 함수

// function aa() {};
// let b = function() {};

// console.log(aa.prototype);
// console.log(hello.prototype.constructor === hello);

function Animal(name, age) {
    this.name = name;
    this.age = age;
};

Animal.prototype.isAnimal = true;
Animal.prototype.eat = function() {
    console.log("밥 먹기");
};

let sam = new Animal("sam", 2);
let boksun = new Animal("bok", 3);

console.log(sam.isAnimal);
console.log(boksun.isAnimal);
sam.eat();
boksun.eat();

boksun.eat = function() {
    console.log("복순 밥");
};

boksun.eat();


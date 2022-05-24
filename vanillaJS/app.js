//alert("hello");

//integer, full number(정수)

console.log(6 + 1);
console.log(6 * 1);
console.log(6 / 1);

//값을 변경하고 싶다면? use variable(값을 저장하거나 유지)

//(상수)
const a = 5;
const b = 2;
let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

//let myName = "nicolas";

myName = "nicolas";
console.log("your name is " + myName);

//let은 새로 생성하는 것인데 위에 이미 myName이 있음 오류남

const amIFat = true;
console.log(amIFat);

//자바스크립트는 존재하지 않음 / 정의되지 않음  / 값이 없음

//값이 없음 = null 그 변수에 아무것도 없다. 아무것도 없는 거로 채워짐. 없는 값이 있는 것.
//false는 값이 존재, null은 값이 없다. 둘이 다름!


let something; // 값이 없음
console.log(something);
//undefined 변수는 존재하나 값이 없다. 비어 있다.

//null은 자연적으로 생기지 않음 명시적
//undefined 변수가 있는데 값이 없음

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sund";

//const dayOfWeek = mon + tue + wed + thi + fri + sat + sun;
//console.log(dayOfWeek)
//너무 길고 불편함. 같은 데이터들의 연속은 배열로 묶어 나열

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //string
console.log(dayOfWeek);

//6번째가 알고 싶다면 Get Item from Array
console.log(dayOfWeek[5]);

//추가할 수도 있다. Add one more day to the array
dayOfWeek.push("sun");
console.log(dayOfWeek);

//const nonsense = [1, 2, "hello", false, null, true, undefined, "nico" ];
//console.log(dayOfWeek, nonsense);

const apple = "apple";
const potato = "potato";
//이렇게 하면 너무 많은 변수 선언이 되므로 배열로 선언

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy);
console.log(toBuy[2]);

// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// player.name
// player.points

//const player = ["nico", 1212, false, "little bit"];
//배열로 정의하면 이런 식.

//그래도 일일이 정의하기 귀찮으니 '객체' 만들기!!

//Object

const player = {
    name : "nico",
    points : 10,
    handsome : false,
    fat : true
};

console.log(player); //객체 호출
console.log(player.name); //객체 요소 호출
console.log(player["name"]); //또 다르게 요소에 접근하는 방법

player.fat = false; //요소의 값 변경
//player는 const로 정의되어 있지만 const 안의 요소들은 각자의 데이터 타입,
//즉, 변경 가능한 변수이기 때문에 변경 가능
console.log(player);

player.lastName = "potato"; //요소의 값 추가
console.log(player);


///////////////////////////////////

//player.points() <- ()는 function을 의미

//function은 내가 계속하여 쓸 수 있는 코드 조각

function sayHi() {
    console.log("hello");
} // {} 코드 블록으로 감쌈

sayHi(); //함수 호출


// alert(); //empty alert
// console.log(); //콘솔창에 아무것도 없음

//sayHi("hello"); //sending data

//hello -> Hi! my name is [ ] 로 호출되도록 변경

function sayHi(nameOfPerson, age) { //인자(매개변수) 값
    console.log("hi, " + nameOfPerson + " your age is " + age + ".");
}

sayHi("olsi", 18); // olsi, 18 // 매개변수가 두 개이므로 두 개 작성

////////////////////////////////////////////

function plus(a, b) {
    console.log(a + b);
}

plus() //undefined, undefined / NaN (Not a Number)
plus(3, 5); //3 ,5

function plus2(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

plus2(8, 60);
//console.log(firstNum); //에러!! firstNum은 함수의 지역변수, 즉, plus 속에서만 존재

const player2 = {
    name : "nico",
    sayhello : function(personName) {
        console.log("Hello! " + personName);
    },
};

console.log(player2.name);
player2.sayhello("min jun");

////////////////////////////////////////////

const calculator = {
    add : function(a, b) {
       console.log(a + b);
    },
    min : function(a, b) {
        console.log(a -b)
    },
    div : function(a, b) {
        console.log(a / b)
    },
    powof : function(a, b) {
        console.log(a**b)
    },
};
//+ -  / **

calculator.add(1, 2);
calculator.min(1, 2);
calculator.div(1, 2);
calculator.powof(1, 2);

////////////////////////////////////////////

//console.log에서 출력하는 것이 아닌 나한테서 출력하기
//alert, 

//const age = 96;
function calculatorKrAge(agrOfForeigner) {
    agrOfForeigner + 2;
    return agrOfForeigner;
}
//함수는 어떤 일을 수행하는 것도 맞지만 수행하고 결과를 '나에게 알려주는 것'으로 생각하면 된다.

//const krAge = calculatorKrAge(age);
//console.log(krAge); //undefined > 위에 return문이 없을 때

//return을 사용하기 위해 function을 사용. function이 function 바깥과 소통하기 위한 것

////////////////////////////////////////////////////////

const calculator2 = {
    add : function(a, b) {
        return a + b;
    },
    min : function(a, b) {
        return a - b;
    },
    div : function (a, b) {
     return a / b;
    },
    pow : function(a, b) {
     return a**b;
    },
};

//console.log(plus(2, 3)); //아무것도 안 뜸. return만 했을 뿐이기 때문에

//const plusResult = calculator2.plus(2, 3);
// console.log(plusResult);
// const minResult = calculator2.min(plusResult, 3);
// console.log(minResult)
// const divResult = calculator2.div(minResult, 5);
// console.log(divResult)
// const powResult = calculator2.pow(2, divResult);
// console.log(powResult)

/////////////////////////////////////////////////////////////////

// const calculator2 = {
//     add : function(a, b) {
//         return a + b;
        //return 후의 코드는 종료됨
        //console.log("hello"); 실행 x

///////////////////////////////////////////////

//조건문

// const age = prompt("How are you?");

// console.log(typeof(age)); //string, prompt는 모든 입력을 string으로 받음
// console.log(age, parseInt(age));

// console.log(typeof("15"), typeof(parseInt("15"))); //string, number

const age = parseInt(prompt("How old art you?")); //number
//함수는 내부->외부 순서, prompt = 첫 번째 함수, parseInt = 두 번째 함수

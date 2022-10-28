try {
    alert('try 블록 시작');
    lalala; // 에러 발생 (변수가 정의되지 않음)
    // 에러가 발생한 후 뒤의 코드는 실행되지 않음
    alert('try 블록 끝(절대 도달하지 않음)');
} catch(err) {
    // catch 블록으로 진입
    alert(`에러가 발생했습니다!`);
}



// // 잘못된 json 형식 문자열을 파싱하다 생긴 에러 잡기

// let json = "{ bad json }";

// try {
//     let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
//     alert( user.name ); // 이 코드는 동작하지 않습니다.
// } catch (e) {
//     // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
//     alert( "데이터에 에러가 있어 재요청을 시도합니다." );
//     alert( e.name );
//     alert( e.message );
// }

// 논리적으로는 불완전한 데이터 (name이 반드시 있어야 한다고 가정)
let json = '{ "age": 30 }';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        // 직접 에러 던지기
        throw new SyntaxError("불완전한 데이터: 이름 없음");
    }
    alert( user.name );
} catch(e) {
    // JSON Error: 불완전한 데이터: 이름 없음
    alert( "JSON Error: " + e.message );
}

// instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지를 확인
// 에러 다시 던지기 방법 적용 코드

function readData() {
    let json = '{ "name": "John", "age": 30 }';

    try {
        let user = JSON.parse(json);
        if (!user.name) {
            throw new SyntaxError("불완전한 데이터: 이름 없음");
        }
        // 함수 내부에서 발생하리라 예상하지 못한 에러 발생 가정
        blabla(); // 여기서 레퍼런스 에러. >>> 죽고 밑에 if로 이동
        alert( user.name );
    } catch(e) {
        // 처리할 수 있는 에러(SyntaxError)만 처리
        // (이 과정에서 에러 타입을 확인하기 위해서 instanceof 명령어 사용)
        if (e instanceof SyntaxError) {
            alert( "JSON Error: " + e.message );
        } else {
            // 처리할 수 없는 에러를 다시 던져서 외부(함수 호출 맥락)에서 처리하게 함
            throw e;
        }
    }
}

try {
    readData(); // 에러 다시 던짐
} catch (e) {
    // 함수를 호출하는 쪽에서 나머지 예외 발생 처리를 진행
    alert( "External catch got: " + e );
}


// 아기가 걷고 있는데 이 아기가 옳곧게 직진하리라고 가정하지 않음
// 그래서 예외 코드가 본 코드보다 길 수 있음.
// 아기가 걷는 곳 주위에 펜스, 푹신푹신한 것을 여러 개 둠으로써
// 직진보행에서 벗어난다는 예외가 발생했을 때 처리할 부분을 준비해놓기.

// 동기 비동기 참고 >>> https://velog.io/@daybreak/%EB%8F%99%EA%B8%B0-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC





// 내가 직접 에러 객체를 만들 수 있음
let e1 = new Error("내가 만든 에러 객체")
let e2 = new SyntaxError("내가 만든 문법 에러 객체")


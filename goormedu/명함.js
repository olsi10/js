function 명함() {
    let name = "홍길동";

    console.log("이름 = " + name);
    console.log("직업 : 개발자")
    console.log("나이 : 50")
}

명함();

//객체로 만들기

const 명함 = {
    name : "최윤영",
    job : "개발자",
    age : 18,
    출력() {
        console.log("이름 : " + this.name)
        console.log("직업 :" + this.job)
    }
};

명함.출력();
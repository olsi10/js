//방법 1

function 구구단(a) {
    console.log(a * 1);
    console.log(a * 2);
    console.log(a * 3);
    console.log(a * 4);
    console.log(a * 5);
    console.log(a * 6);
    console.log(a * 7);
    console.log(a * 8);
    console.log(a * 9); 
}

구구단(3);

//방법 2

function 구구단2(a) {
    for(let i = 1; i < 10; i++) {
        console.log(a * i);
    }
}

구구단2(3);
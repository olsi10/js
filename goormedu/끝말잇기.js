let word = '사과';
let i = 0;
while(true) {
    let newWord = prompt(word);
    if(word[word.length - 1] === newWord[0]) {
        alert("딩동댕!");
        word = newWord;
    }
    else {
        alert("땡!");
        i++;
        if(i == 5) {
            alert("다섯 번 틀렸으니 탈락!");
            break;
    }
    }
}
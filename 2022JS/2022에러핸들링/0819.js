try {
    alert('try 블록 시작');
    lalala; // 에러 발생 (변수가 정의되지 않음)
    // 에러가 발생한 후 뒤의 코드는 실행되지 않음
    alert('try 블록 끝(절대 도달하지 않음)');
} catch(err) {
    // catch 블록으로 진입
    alert(`에러가 발생했습니다!`);
}
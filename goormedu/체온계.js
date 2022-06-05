function 체온계(a) {
    if(a < 34.0) {
        console.log("저온");
    }
    if(34.0 < a && a < 37.0) {
        console.log("정상");
        }
    if(37.0 < a) {
        console.log("고온");
    }
}

체온계(36.5);
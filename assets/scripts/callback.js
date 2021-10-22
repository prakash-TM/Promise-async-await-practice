const sum = (a, b, check) => {
    let res = a + b;
    if (a > b) {
        check(`${a} is greater then ${b} and the sum is ${res}`);
    } else if (a < b) {
        check(`${a} is lesser then ${b} and the sum is ${res}`);
    } else {
        check(`${a} and ${b} both are equal and the sum is ${res}`);
    }

}

sum(10, 20, (check) => {
    console.log(check);
})
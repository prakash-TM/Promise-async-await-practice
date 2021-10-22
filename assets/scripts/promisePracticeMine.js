const sum = (a, b) => {
    return new Promise((replay, reject) => {
        reject(a + b);
    });
}

sum(10, 20).then((out) => {
    console.log("Replay :", out)
}).catch((out) => {
    console.log("Reject :", err)
});
// first method
console.log("First method")
const sum = async() => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 5000)
    }

}

const result = async() => {
    return await sum();
    console.log("end")
}

console.log(result())


//Second method
console.log("Second Method")

const sum1 = async(a1, b1) => {
    return (a1 + b1);
}

const result1 = async() => {
    console.log(await sum1(10, 20))
    console.log("end of second method")

}
result1()


//Third method
console.log("Third method")
const sum2 = (a2, b2) => {
    return (a2 + b2)
}

const sum3 = async() => {
    const res1 = await sum2(10, 20).catch(() => { null })
    if (res1 !== null) {
        console.log(res1)
    }
    console.log(res1)
}
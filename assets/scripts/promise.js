const add = async(a, b) => {
    return a + b;
};


const result = add(10, 20).then((data) => {
    console.log(data);
    return data;
})
console.log(result);
// // Loop
// const arr = [1, 2, 3, 4, 5];
// const userMap = (array, fn) => {
//     return fn(array);
// };
// const newArr = userMap(arr, (array) => {
//     const arr = [];
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         arr.push(array[i]);
//     }
//     return arr;
// });
// console.log(newArr);
// // Addition
// const calAddition = (a, b) => {
//     return a + b;
// };
// const showAddition = (a, b, fn) => {
//     return fn(a, b);
// };
// console.log(showAddition(10, 20, calAddition));
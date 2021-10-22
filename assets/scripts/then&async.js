// const connectToTheDatabase = () => {
//     return new Promise((reply, reject) => {
//         if (true) {
//             reply(true);
//         }
//         reject(false);


//     });
// };

// const connectToAnotherDatabase = () => {
//     return new Promise((reply, reject) => {
//         reply(true);
//     });
// };

/**
 * 1 - Start connectToTheDatabase promise code
 * 2- When the code is completed, i need to print, it's completed
 * 3 - Start connectToAnotherDatabase promise code
 * 4- When the code is completed, i need to print, it's completed
 * 5- I'm done
 */
// const thenExample = () => {
//     console.log("A connectToTheDatabase promise started");
//     connectToTheDatabase().then((response) => {
//         console.log(response);

//         connectToAnotherDatabase().then((res) => {
//             console.log("A connectToAnotherDatabase promise completed");
//             console.log("A I'm done");
//         });
//     }).catch((err) => {
//         console.log(err)

//     });
// };

// thenExample();







const connectToTheDatabase = () => {
    return new Promise((reply, reject) => {
        if (true) {
            reply(true);
        }
        reject(false);
    });
};

const connectToAnotherDatabase = () => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};

const asyncAwaitExample = async() => {
    console.log("B connectToTheDatabase promise started");
    await connectToTheDatabase();

    console.log("B connectToTheDatabase promise completed");
    console.log("B connectToAnotherDatabase promise started");
    await connectToAnotherDatabase();

    console.log("B connectToAnotherDatabase promise completed");
    console.log("B I'm done");
};

asyncAwaitExample();

/**
 * Pomise Chaining
 * Promise.all
 * Promise.any
 * Promise.allSettled
 */
// create a promise, which will simply take 2 arguments & return response

// const getSum = (a, b) => {

//         return new Promise((reply, reject) => {
//             reply(a + b);
//         });

//     }
/*
const response = getSum();
 console.log({ response }); */

// console.log("Code Started");

// getSum(1, 2).then((data) => {
//         console.log({ data });
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     });

// console.log("Code Ended Gracefully");

const connectToTheDatabase = () => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};

const getUsers = (params) => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};

const getUserSettings = (params) => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};

const enableAccess = (user, setting) => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};

connectToTheDatabase().then((database) => {
    return getUsers(database).then((user) => {
        return getUserSettings(user).then((settings) => {
            return enableAccess(user, setting);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
});

/**
 * Step 1 - Establish connection
 * Step 2 - Get users details
 * Step 3 - Get users setting
 * Step 4 - Enable users access
 */

const getInfo = async() => {
    const dbConnection = await connectToTheDatabase().catch((err) => null);
    if (dbConnection === null) {
        return { results: false };
    }

    const usersList = await getUsers(dbConnection).catch((err) => null);
    if (usersList === null) {
        return { results: false };
    }

    const usersSetting = await getUserSettings(dbConnection).catch((err) => null);
    if (usersSetting === null) {
        return { results: false };
    }
    const enableAccessResponse = await enableAccess(
        usersList,
        usersSetting
    ).catch((err) => null);

    if (enableAccessResponse === null) {
        return { results: false };
    }

    /*   try {
      const dbConnection = await connectToTheDatabase();
      const usersList = await getUsers(dbConnection);
      const usersSetting = await getUserSettings(dbConnection);
      const enableAccessResponse = await enableAccess(usersList, usersSetting);
    } catch (err) {
      console.log({ err });
    } */
};

console.log("Code Started");
getInfo();

console.log("Code Completed");
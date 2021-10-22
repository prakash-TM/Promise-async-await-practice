/**
 * @description {Create a flow for home party}
 *  - Food Preparation
 *  - Cleaning the house
 *  - Make cold coffee
 *
 * Step 1 - Akash & Gopi decided to do a party
 * Step 2 - Both of them decided to divide their work as Gopi would be going out & akash will be finish home task & wait for gopi's callback(Phone call)
 * Step 3 - Gopi went out to buy things (Asynchronous Execution - Promise)
 * Step 3.1 - Gopi is travelling
 * Step 3.2 - Gopi bought food items
 * Step 3.3 - Gopi completed his shopping
 * Step 4 - Akash started cleaning the room
 * Step 5 - Akash completed cleaning the room
 * Step 6 - Akash started making the cold coffee , got an intimation that gopi tries to call him
 * Step 7 - Akash completed making the cold coffee
 * Step 8 - He saw his phone & called back Gopi to get an update
 * Step 9 - Gopi came back & they both prepared pav bhaji & Pizza
 * Step 9.1 - They're preparing the food
 * Step 10 - They did party & enjoyed
 * Step 11 - The slept & done with the party
 */

/**
 * @description {Akash & Gopi will be deciding to party & distributing tasks}
 */
const planAParty = () => {
    console.log("Step 1 - Let us plan a party");
    console.log("Step 2 - Gopi is going out & akash is doing home work");
    goingOutToBuyMaterial();
    cleaningTheRoom();
};

const gopiIsBuying = async() => {
    return {};
};

/**
 * @description {Gopi is going out to buy material & promising that i'll come back soon}
 */
const goingOutToBuyMaterial = () => {
    console.log("Step 3 - Gopi is leaving to get material from the market");
    // doing shopping async
    gopiIsBuying().then((data) => {
        console.log("Step 3.1 - Gopi is travelling");
        console.log("Step 3.2 - Gopi bought food items");
        gopiCameBackToHome();
    });
};

/**
 * @description {Let's wrap up the party}
 */
const finishTheParty = () => {
    console.log("Step 11 - The slept & done with the party");
};

/**
 * @description {Execute the party}
 */
const executeTheParty = () => {
    console.log("Step 10 - They did party & enjoyed");
    finishTheParty();
};

/**
 * @description {Prepare the food together}
 */
const prepareTheFoodTogether = () => {
    console.log("Step 9.1 - They are preparing the food");
    executeTheParty();
};

const gopiCameBackToHome = () => {
    console.log("Step 8 - He saw his phone & called back Gopi to get an update");
    console.log("Step 9 - Gopi came back & they both prepared pav bhaji & Pizza");
    // Should we call this here?
    prepareTheFoodTogether();
};

/**
 * @description {Preparing colf coffee}
 */
const preparingColdCoffee = () => {
    console.log("Step 6 - Akash is preparing the cold coffee");
    console.log("Step 7 - Akash completed preparing the cold coffee");
    for (let i = 0; i < 10; i++) {
        console.log("Inside : i: ", i);
    }
};

/**
 * @description {Cleaning the room}
 */
const cleaningTheRoom = () => {
    console.log("Step 4 - Akash is cleaning the room");
    console.log("Step 5 - Akash completed cleaning the room");
    preparingColdCoffee();
};

planAParty();
#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a randem number "Done"
// user input for guessing number "Done"
// compare user input with computer generated number and show result
const randumNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserNumberguess",
        type: "number",
        message: "please guess a number between 1 to 6 ",
    },
]);
if (answers.UserNumberguess === randumNumber) {
    console.log("Congratulation ! you are guess right Number");
}
else {
    console.log("Sorry,You are not guess a right number");
}

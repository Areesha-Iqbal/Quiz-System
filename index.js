#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.italic("\n>>>>>>>>>> 🌟 Welcome to TypeScript Quiz 🌟 <<<<<<<<<<<\n"));
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: chalk.green.italic("What does the trim method do in TypeScript ❔"),
        choices: [
            "Removes whitespace from both sides of a string",
            "Removes whitespace from the beginning of a string",
            "Removes whitespace from the end of a string",
            "Removes all whitespace from a string",
        ],
    },
    {
        name: "Question_2",
        type: "list",
        message: chalk.green.italic("\nWhich of the following is the correct way to use the trim method in TypeScript ❔"),
        choices: [
            "str.trim()",
            "trim(str)",
            "String.trim(str)",
            "String.prototype.trim.call(str)",
        ],
    },
    {
        name: "Question_3",
        type: "list",
        message: chalk.green.italic("\nWhat does the splice method do in TypeScript ❔"),
        choices: [
            "Adds one or more elements to the beginning of an array",
            "Removes elements from an array and, if necessary, inserts new elements in their place",
            "Returns a shallow copy of a portion of an array into a new array object",
            "Returns the last element of an array and removes it from the array",
        ],
    },
    {
        name: "Question_4",
        type: "list",
        message: chalk.green.italic("\nWhat does the slice method do in TypeScript ❔"),
        choices: [
            "Adds one or more elements to the beginning of an array",
            "Removes elements from an array and, if necessary, inserts new elements in their place",
            "Returns a shallow copy of a portion of an array into a new array object",
            "Returns the last element of an array and removes it from the array",
        ],
    },
    {
        name: "Question_5",
        type: "list",
        message: chalk.green.italic("\nWhat does the split method do in TypeScript ❔"),
        choices: [
            "Removes elements from an array and, if necessary, inserts new elements in their place",
            "Returns a shallow copy of a portion of an array into a new array object",
            "Splits a string into an array of substrings",
            "Returns the last element of an array and removes it from the array",
        ],
    },
    {
        name: "Question_6",
        type: "list",
        message: chalk.green.italic("\nWhat is the correct way to check if two values are not equal in TypeScript ❔"),
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
    {
        name: "Question_7",
        type: "list",
        message: chalk.green.italic("\nWhat does the floor method do in TypeScript ❔"),
        choices: [
            "Returns the largest integer less than or equal to a given number",
            "Adds one or more elements to the end of an array",
            "Removes the last element from an array and returns it",
            "Returns a shallow copy of a portion of an array into a new array object",
        ],
    },
    {
        name: "Question_8",
        type: "list",
        message: chalk.green.italic("\nWhat does the pop method do in TypeScript ❔"),
        choices: [
            "Returns the largest integer less than or equal to a given number",
            "Adds one or more elements to the end of an array",
            "Removes the last element from an array and returns it",
            "Returns a shallow copy of a portion of an array into a new array object",
        ],
    },
    {
        name: "Question_9",
        type: "list",
        message: chalk.green.italic("\nWhat does the push method do in TypeScript ❔"),
        choices: [
            "Returns the largest integer less than or equal to a given number",
            "Adds one or more elements to the end of an array",
            "Removes the last element from an array and returns it",
            "Returns a shallow copy of a portion of an array into a new array object",
        ],
    },
    {
        name: "Question_10",
        type: "list",
        message: chalk.green.italic("\nWhat is the correct way to check if two values are equal in TypeScript ❔"),
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
]);
let score = 0;
if (quiz.Question_1 === "Removes whitespace from both sides of a string") {
    console.log(chalk.magenta.italic("1. Correct ✔️"));
    ++score;
}
else {
    console.log(chalk.red.italic("1. Incorrect ❌"));
}
if (quiz.Question_2 === "str.trim()") {
    console.log(chalk.magenta.italic("2. Correct ✔️"));
    ++score;
}
else {
    console.log(chalk.red.italic("2. Incorrect ❌"));
}
if (quiz.Question_3 ===
    "Removes elements from an array and, if necessary, inserts new elements in their place") {
    console.log(chalk.magenta.italic("3. Correct ✔️"));
    ++score;
}
else {
    console.log(chalk.red.italic("3. Incorrect ❌"));
}
switch (quiz.Question_4) {
    case "Returns a shallow copy of a portion of an array into a new array object":
        console.log(chalk.magenta.italic("4. Correct ✔️"));
        ++score;
        break;
    default:
        console.log(chalk.red.italic("4. Incorrect ❌"));
}
switch (quiz.Question_5) {
    case "Splits a string into an array of substrings":
        console.log(chalk.magenta.italic("5. Correct ✔️"));
        ++score;
        break;
    default:
        console.log(chalk.red.italic("5. Incorrect ❌"));
}
switch (quiz.Question_6) {
    case "a !== b":
        console.log(chalk.magenta.italic("6. Correct ✔️"));
        ++score;
        break;
    default:
        console.log(chalk.red.italic("6. Incorrect ❌"));
}
switch (quiz.Question_7) {
    case "Returns the largest integer less than or equal to a given number":
        console.log(chalk.magenta.italic("7. Correct ✔️"));
        ++score;
        break;
    default:
        console.log(chalk.red.italic("7. Incorrect ❌"));
}
switch (quiz.Question_8) {
    case "Removes the last element from an array and returns it":
        console.log(chalk.magenta.italic("8. Correct ✔️"));
        ++score;
        break;
    default:
        console.log(chalk.red.italic("8. Incorrect ❌"));
}
if (quiz.Question_9 === "Adds one or more elements to the end of an array") {
    console.log(chalk.magenta.italic("9. Correct ✔️"));
    ++score;
}
else {
    console.log(chalk.red.italic("9. Incorrect ❌"));
}
if (quiz.Question_10 === "a === b") {
    console.log(chalk.magenta.italic("10. Correct ✔️"));
    ++score;
}
else {
    console.log(chalk.red.italic("10. Incorrect ❌"));
}
console.log(chalk.blueBright.italic(`Your Total score is ${score} 🎉`));

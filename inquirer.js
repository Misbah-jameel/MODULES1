// Modules in typescript 
import chalk from "chalk";
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        type: "number",
        name: "age",
        message: "enter your age"
    }]);
console.log(chalk.magenta.bold.italic("Your current age is :", answers.age));
// let food = await inquirer.prompt([{
//     type: "output",
//     name : "streat food",
//     Choice : ["pizza","burger","pasta","salad"],
//     message : "select one plz",
// }])
// console.log(chalk.magenta.bold.italic(" THANKS FOR YOUR OTHERS:" ,food.choice));

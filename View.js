const chalk = require("chalk");

process.stdin.setEncoding("utf-8");
console.log("Введите номер задания: ");
process.stdin.on("data", (input) => {
  //typeof input  === string
  const number = parseInt(input.trim());
  if (number === 1) {
    console.log(chalk.yellow("Вы выбрвли тему: "), chalk.bold.green("Ястребы"));
  } else if (number === 2) {
    console.log(chalk.yellow("Вы выбрвли тему: "), chalk.bold.green("Выдры"));
  } else if (number === 3) {
    console.log(chalk.yellow("Вы выбрвли тему: "), chalk.bold.green("Енотов"));
  }
});

const chalk = require("chalk");

class View {
  constructor() {
    // Вызов функции в уонструкторе
    this.setupInputListener(); // для того чтобы не вызывать отдельно методы
  }

  // Метод для настройки слушателя ввода
  setupInputListener() {
    process.stdin.setEncoding("utf-8");
    console.log("Введите номер задания: ");
    process.stdin.on("data", (input) => {
      const number = parseInt(input.trim());
      this.displayTopic(number);
    });
  }

  // Метод для отображения выбранной темы
  displayTopic(number) {
    if (number === 1) {
      console.log(
        chalk.yellow("Вы выбрвли тему: "),
        chalk.bold.green("Ястребы")
      );
    } else if (number === 2) {
      console.log(chalk.yellow("Вы выбрвли тему: "), chalk.bold.green("Выдры"));
    } else if (number === 3) {
      console.log(chalk.yellow("Вы выбрвли тему: "), chalk.bold.green("Еноты"));
    }
  }
}

const view = new View();

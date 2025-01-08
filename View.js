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
    switch (number) {
      case 1:
        console.log(
          chalk.yellow("Вы выбрaли тему: "),
          chalk.bold.green("Ястребы")
        );
        break;
      case 2:
        console.log(
          chalk.yellow("Вы выбрaли тему: "),
          chalk.bold.green("Выдры")
        );
        break;
      case 3:
        console.log(
          chalk.yellow("Вы выбрaли тему: "),
          chalk.bold.green("Еноты")
        );
        break;
      default:
        console.log(chalk.red("Некорректный выбор."));
        break;
    }
  }
}

const view = new View();

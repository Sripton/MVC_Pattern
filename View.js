const chalk = require("chalk");
const controller = require("./Controller");
class View {
  constructor() {
    // Вызов функции в kонструкторе
    this.setupInputListener(); // для того чтобы не вызывать отдельно методы
  }
  // Метод для настройки слушателя ввода
  setupInputListener() {
    process.stdin.setEncoding("utf-8");
    console.log("Введите номер задания: ");
    process.stdin.on("data", (input) => {
      const number = parseInt(input.trim());
      if (!isNaN(number)) {
        process.stdin.removeAllListeners("data"); //  удалить слушатель process.stdin.on("data") после того, как выбор темы был сделан
        this.displayTopic(number);
      } else {
        console.log(chalk.red("Пожалуйста, введите корректное число."));
      }
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
        this.setupInputListener(); // Перезапуск слушателя для нового ввода
        break;
    }
    controller.handleUserInput(number).then(() => {
      this.setupInputListener();
    });
  }
}

const view = new View();

const chalk = require("chalk");
const model = require("./Model");

class Controller {
  async handleUserInput(number) {
    const questions = await model.returnReadFileMenu(number);
    if (!Array.isArray(questions) || questions.length === 0) {
      console.log("Нет доступных вопросов для отображения.");
      return;
    }
    for (let i = 0; i < questions.length; i++) {
      if (i % 2 === 0) {
        console.log(
          chalk.yellow("Вопрос: "),
          chalk.bold.red(`${questions[i]}`)
        );
        const answear = await this.getUserAnswer(); // Ждем ответа от пользователя
        console.log(chalk.yellow("Ваш ответ"), chalk.bold.green(`${answear}`));
      }
    }
  }

  getUserAnswer() {
    return new Promise((resolve) => {
      process.stdin.once("data", (data) => {
        resolve(data.trim());
      });
    });
  }
}
const controller = new Controller();

module.exports = controller;

const chalk = require("chalk");
const model = require("./Model");

class Controller {
  async handleUserInput(number) {
    const questions = await model.returnReadFileMenu(number);
    if (!Array.isArray(questions) || questions.length === 0) {
      console.log("Нет доступных вопросов для отображения.");
      return;
    }
    let count = 0; // для подсчета ко-ва баллов
    for (let i = 0; i < questions.length; i++) {
      if (i % 2 === 0) {
        console.log(
          chalk.yellow("Вопрос: "),
          chalk.bold.red(`${questions[i]}`)
        );
        const answear = await this.getUserAnswer(); // Ждем ответа от пользователя
        let j = i + 1;
        if (answear === questions[j]) {
          count++;
          console.log(chalk.yellow("Вы ответили правильно. "));
        } else if (answear !== questions[j]) {
          console.log(chalk.yellow("Вы ответили не правильно. "));
        }
      }
    }
    console.log(`Парвильных ответов: `, chalk.bold.green(`${count}`));
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

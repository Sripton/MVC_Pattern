const fs = require("fs");
const path = require("path");

class Model {
  returnTopicsFile() {
    return new Promise((resolve, reject) => {
      return fs.readdir(path.join(__dirname, "topics"), (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  }
  returnReadFileMenu(number) {
    if (number === 1) {
      return this.returnTopicsFile().then((data) => {
        const result = fs.readFileSync(
          path.join(__dirname, "topics", `${data[0]}`),
          "utf-8"
        );
        return result.split("\n").filter((element) => element !== "");
      });
    } else if (number === 2) {
      return this.returnTopicsFile().then((data) => {
        const result = fs.readFileSync(
          path.join(__dirname, "topics", `${data[1]}`),
          "utf-8"
        );
        return result.split("\n").filter((element) => element !== "");
      });
    } else if (number === 3) {
      return this.returnTopicsFile().then((data) => {
        const result = fs.readFileSync(
          path.join(__dirname, "topics", `${data[2]}`),
          "utf-8"
        );
        return result.split("\n").filter((element) => element !== "");
      });
    }
  }
}
const model = new Model();
module.exports = model;

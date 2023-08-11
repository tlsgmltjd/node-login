"use strict";

class UserStorage {
  static #users = {
    id: ["신희성", "이진헌"],
    password: ["0301", "0222"],
  };

  static getUsers(...data) {
    const users = this.#users;
    const newUserObj = {};

    data.forEach((i) => {
      const newData = users[i];
      newUserObj[i] = newData;
    });

    return newUserObj;
  }
}

module.exports = UserStorage;

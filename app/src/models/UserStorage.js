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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;

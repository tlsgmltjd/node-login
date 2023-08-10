"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json()); // JSON 데이터 처리
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 처리

app.use("/", home);

module.exports = app;

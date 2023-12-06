"use strict";
const http = require("http");

let counter = 0;
let countAbout = 0;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(`<h1>Главная страница сайта "Домашняя работа"</h1>
      <a href="/about">О нас</a>
      <div>${counter++}</div>`);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(`<h1>О нас</h1>
        <a href="/">Главная страница сайта</a>
        <div>${countAbout++}</div>`);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(`<h1>Страница не найдена</h1>
        <a href="/">Вернуться на главную страницу сайта</a>`);
      break;
  }
});

const port = 3001;
server.listen(port);

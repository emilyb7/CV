const pug = require("pug");
const fs = require("fs");
const data = require("./data.js");
const { markdown } = require("markdown");

const locals = Object.assign({}, data, { markdown });

const filePath = "templates/base.pug";

const html = pug.renderFile(filePath, locals);

fs.writeFileSync("./pug.html", html);

const pug = require("pug");
const fs = require("fs");
const locals = require("./data.js");

const filePath = "templates/base.pug";

const html = pug.renderFile(filePath, locals);

fs.writeFileSync("./pug.html", html);

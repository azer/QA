var QA = require('./');

var questions = [
  "{bold}Name:{reset}",
  { title: "Username:", default: process.env.USER },
  { title: "E-Mail:", validate: { email: true } },
  { title: "{bold}Favorite foods:{reset}", list: 3 },
  { key: "books", title: "{bold}Favorite books {grey}(Type as much as you want!){reset}{bold}:{reset}", list: true },
  "{bold}Additional Thoughts{reset}",
  { title: "{yellow}Favorite {green}Fruits{reset}:", commaList: true },
  { key: 'thatsAll', title: "{yellow}{bold}That's all, {name}? {grey}(yes/no){reset}", bool: true },
];

QA(questions, function (answers) {
  console.log(answers);
});

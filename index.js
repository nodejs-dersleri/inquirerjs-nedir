

var inquirer = require('inquirer');
var fs = require('fs');

var questions = [
  {
    type: "input",
    name: "name",
    message: "Project name?"
  },
  {
    type: "list",
     name: "main",
     message: "Main file",
     choices: [ "app.js", "app2.js", "npm.js" ],
  },
  {
      type: "password",
      name : 'checkbox',
      message : 'Password'
  }
];

inquirer.prompt(questions, function( answers ) {

  if(answers.main){
      fs.writeFile(answers.main, 'var main ="";', function(){
        console.log('ok!')
      });
  }

  console.log(JSON.stringify(answers, null , ' '));
});

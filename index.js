'use strict';

const makeIntro = function(){
  return '\n=========================================================='
       + '\n\n Hello and welcome to Tic Tac Toe, the CLI sensation!'
       + '\n Get ready for heart-pounding action.'
       + '\n  ______________________________________________________\n\n'
}

const makeGUIgrid = function() {
  var GUIgrid = '';
  for (var i = 0; i < 3; i++){
    GUIgrid += '\t\t  '
    for (var j = 0; j < 3; j++){
      GUIgrid += '|_?_|';
    }
    GUIgrid += '\n';
  }
  return GUIgrid;
};

const showPlayPrompt = function(){
  return '\n Type the number of the square where you\'d like to play.\n';
};

const updateGUIgrid = function(grid){};

var grid = makeGUIgrid();
console.log(makeIntro());
console.log(grid);
console.log(showPlayPrompt());



const program = require('commander');
program
  .version('0.0.1')
  .command('play <req> [optional]')
  .description('play description')
  .option('-o, --option','we can still have add\'l options')
  .action(function(req,optional){
    console.log('.action() allows us to implement the command');
    console.log('User passed %s', req);
    if (optional) {
      //optional.forEach(function(opt){
        console.log("User passed optional arguments: %s", optional);
      //});
    }
  });
program.parse(process.argv); // notice that we have to parse in a new statement.
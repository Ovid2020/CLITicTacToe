var readline = require('readline');
'use strict';

const makeIntro = function(){
  return '\n=========================================================='
       + '\n\n Hello and welcome to Tic Tac Toe, the CLI sensation!'
       + '\n Get ready for heart-pounding action.'
       + '\n  ______________________________________________________\n\n'
}

const makeGUIgrid = function(markRow, markCol, mark) {
  var GUIgrid = '';
  for (var i = 0; i < 3; i++){
    GUIgrid += '\t\t  '
    for (var j = 0; j < 3; j++){
      if (markRow && markCol && (i === parseInt(markRow) && j === parseInt(markCol)) ) {
        GUIgrid += '| ' + mark + ' |';
      } else {
        GUIgrid += '|_?_|';
      }
    }
    GUIgrid += '\n';
  }
  return GUIgrid;
};

var grid = makeGUIgrid();
console.log(makeIntro());
console.log(grid);
console.log(showPlayPrompt());

var playerMark = 'o';

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('You\'re playing as: ' + playerMark + '\nEnter a row, column for your move (r,c): ');

rl.prompt();

rl.on('line', function(line) {
  var rowCol = line.split(",");
  var newGrid = makeGUIgrid(rowCol[0], rowCol[1], 'o');
  console.log(newGrid);

  if (line === "exit") {
    rl.close();
  }
  rl.setPrompt('You\'re playing as: ' + playerMark + '\nEnter a row, column for your move (r,c): ');
  rl.prompt();
}).on('close',function(){
    process.exit(0);
});


var readline = require('readline');
'use strict';

const makeIntro = function(){
  return '\n=========================================================='
       + '\n\n Hello and welcome to Tic Tac Toe, the CLI sensation!'
       + '\n Get ready for heart-pounding action.'
       + '\n  ______________________________________________________\n\n'
}


var guiData = [['?','?','?'],['?','?','?'],['?','?','?']];

const makeGUIgrid = function() {
  var GUIgrid = '';
  for (var i = 0; i < 3; i++){
    GUIgrid += '\t\t  '
    for (var j = 0; j < 3; j++){
      GUIgrid += '| ' + guiData[i][j] + ' |';
    }
    GUIgrid += '\n';
  }
  return GUIgrid;
};

var grid = makeGUIgrid();
console.log(makeIntro());
console.log(grid);

var playerMark = 'o'; 

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('You\'re playing as: ' + playerMark + '\nEnter a row, column for your move (r,c): ');
rl.prompt();

rl.on('line', function(line) {
  var areAnyErrors = false;
  var rowCol = line.split(",");
  var rowInd = parseInt(rowCol[0]) - 1;
  var colInd = parseInt(rowCol[1]) - 1;

  if (guiData[rowInd][colInd] !== '?') {
    console.log('That space is already occupied! Place somewhere new.');
    areAnyErrors = true;
  }

  if (rowInd < 0 || rowInd > 2 || colInd < 0 || colInd > 2) {
    console.log('That space is out of bounds! Please place somewhere on the grid.')
  }

  if (!areAnyErrors) {
    guiData[rowInd][colInd] = playerMark;
    grid = makeGUIgrid();
    console.log(grid);
  }

  playerMark = playerMark === 'o' ? 'x' : 'o';
  if (line === "exit") {
    rl.close();
  }
  rl.setPrompt('You\'re playing as: ' + playerMark + '\nEnter a row, column for your move (r,c): ');
  rl.prompt();
}).on('close',function(){
    process.exit(0);
});


$(document).ready(function() {
Play.makeBoard();
$('body').append("<iframe style='display:none;' src='https://www.youtube.com/embed/A_sY2rjxq6M'>")
Play.start();
Play.play();
})

const Tile = function() {
//placeholder for each turn a player takes
this.value = null;
}

const Grid = function() {
  this.framesArray = [];
//empty array for each tile on the grid
  this.currentPlayer = false;
 
  this.chip = false;
 
  this.isWinner =false;

  this.winnerFound = false;
};


Grid.prototype.initGame = function() {
//this prototype will intiate the game function and will be reused throught the course
//reference: https://www.w3schools.com/jsref/jsref_prototype_array.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
let $currentPlayerMarker1 = $('<div id = "Platform">').html("Platform");
let $currentPlayerMarker2 = $('<div id = "Bellbottom">').html("Bellbottom");
$('#currentplayer1').append($currentPlayerMarker1);
this.framesArray = [];
this.currentPlayer = "Platform";
//will append the platform image to the chip upon first click and then switch over to currentplayer bellbottoms
this.chip = $("<img id='Platform' src='http://a.imgur.com/ibUKIr3.jpg'/>");
this.currentPlayerMarker1 = $currentPlayerMarker1;
this.currentPlayerMarker2 = $currentPlayerMarker2;


let gridArray = [];
//large array placeholder for the cells on my grid
let columnArray = [];
//this will create big array of tile objects
for (let a = 0; a < 42; a++) {
gridArray.push(new Tile());}
//this loop will iterate up until 7 times in order to create the 7 columns in the array
//outer loop to repeat the below process 7 times, creating 7 column arrays.
for (let b = 0; b < 7; b++) {
//loop to create an array of 6;
for (let a = 0; a < 6; a++) {
//each time it pushes into the column Array, and then takes one from the grid array
columnArray.push(gridArray[0]);
gridArray.shift();}
//[pushes that column array into the final array for the grid
this.framesArray.push(columnArray);
//clears the column array for the big loop
columnArray = [];
  }

};

//used in place of 'if, else' as this seemed like a tidier solution. Reference:http://stackoverflow.com/questions/427760/when-to-use-if-else-if-else-over-switch-statments-and-vice-versa
// and https://www.w3schools.com/js/js_switch.asp
Grid.prototype.switchPlayer = function() {
switch (this.currentPlayer) { 
case 'Platform':
//switching platforms to bellbottoms
this.chip = $("<img id='Bellbottom' src='http://a.imgur.com/sQVBcmg.jpg'/>");
this.currentPlayer = 'Bellbottom';
break;
case 'Bellbottom':
this.chip = $("<img id='Platform' src='http://a.imgur.com/ibUKIr3.jpg'/>");
this.currentPlayer = 'Platform';
break;
  }
};



//created to use on win functionality 
// Grid.prototype.displayWinner = function(currentPlayer) {
// $('body').addClass('pyro');
// $('body').append("<iframe style='display:none;' src='https://www.youtube.com/embed/V7EfnYwpmOE'>");





const Play = {
//actual game 
grid: false,
makeBoard: function() {
this.grid = new Grid();
},
start: function() {
this.grid.initGame();
},
play: function() {
console.log('Play going!');
let $columns = $('.col');


$columns.click(function() {
//event listener for each column passing player
let currentPlayer = Play.grid.currentPlayer;
let tokenImage = Play.grid.chip;
//this changes the chip from platform to bellbottom and vice versa
if (currentPlayer === "Platform") {
//by removing current player and appending new player
Play.grid.currentPlayerMarker1.remove();
$('#currentplayer2').append(Play.grid.currentPlayerMarker2);
} else if (currentPlayer === 'Bellbottom') {
Play.grid.currentPlayerMarker2.remove();
$('#currentplayer1').append(Play.grid.currentPlayerMarker1);
}

if (this.id === 'col0') {
//clicking on column zero adds a chip to the lowest place available on the grid
console.log('Column 0' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#0-' + b).text() === "") {
//checking for the lowest spot available
let $this = $('#0-' + b);
let chip = $(tokenImage);

//animation for chip drop
chip.hide();
$('#0-' + b).text(currentPlayer);
$this.append(chip);
chip.velocity("transition.bounceDownIn")



// if column zero is clicked this Checks for the lowest free spot and add piece.
$('#0-' + b).append(chip);
Play.grid.framesArray[0][b].value = currentPlayer;
Play.grid.switchPlayer();
Play.grid.checkWin(currentPlayer);
if (Play.grid.winnerFound === true) {
Play.grid.displayWinner(currentPlayer);
}
return;
}
}
}

else if (this.id === 'col1') {
// if column one is clicked this Checks for the lowest free spot and add piece.
console.log('Column 1' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#1-' + b).text() === "") {
$('#1-' + b).text(currentPlayer);
//adds chip
$('#1-' + b).append(tokenImage);
Play.grid.framesArray[1][b].value = currentPlayer;
Play.grid.switchPlayer();
//switches player
Play.grid.checkWin(currentPlayer);
//checks for winner
if (Play.grid.winnerFound === true) {
Play.grid.displayWinner(currentPlayer);
}
return;
}
}
}

else if (this.id === 'col2') {
// if column two is clicked this Checks for the lowest free spot and add piece.
console.log('Column 2' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#2-' + b).text() === "") {
$('#2-' + b).text(currentPlayer);
$('#2-' + b).append(tokenImage);
Play.grid.framesArray[2][b].value = currentPlayer;
Play.grid.switchPlayer();
return;
}
}
}

else if (this.id === 'col3') {
// if column three is clicked this Checks for the lowest free spot and add piece.
console.log('Column 3' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#3-' + b).text() === "") {
$('#3-' + b).text(currentPlayer)
$('#3-' + b).append(tokenImage);
Play.grid.framesArray[3][b].value = currentPlayer;
Play.grid.switchPlayer();
Play.grid.checkWin(currentPlayer);
if (Play.grid.winnerFound === true) {
Play.grid.displayWinner(currentPlayer);
}
return;
}
}
}

else if (this.id === 'col4') {
// if column four is clicked this Checks for the lowest free spot and add piece.
console.log('Column 4' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#4-' + b).text() === "") {
$('#4-' + b).text(currentPlayer);
$('#4-' + b).append(tokenImage);
Play.grid.framesArray[4][b].value = currentPlayer;
Play.grid.switchPlayer();
Play.grid.checkWin(currentPlayer);
if (Play.grid.winnerFound === true) {
Play.grid.displayWinner(currentPlayer);
}
return;
}
}
}

else if (this.id === 'col5') {
// if column five is clicked this Checks for the lowest free spot and add piece.
console.log('Column 5' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#5-' + b).text() === "") {
$('#5-' + b).text(currentPlayer);
$('#5-' + b).append(tokenImage);
Play.grid.framesArray[5][b].value = currentPlayer;
Play.grid.switchPlayer();
Play.grid.checkWin(currentPlayer);
if (Play.grid.winnerFound === true) {
Play.grid.displayWinner(currentPlayer);
}
return;
}
}
}

else if (this.id === 'col6') {
// if column six is clicked this Checks for the lowest free spot and add piece.
console.log('Column 6' + ' has been clicked by ' + currentPlayer);
for (let b = 0; b < 6; b++) {
if ($('#6-' + b).text() === "") {
$('#6-' + b).text(currentPlayer);
$('#6-' + b).append(tokenImage);
Play.grid.framesArray[6][b].value = currentPlayer;
Play.grid.switchPlayer();
Play.grid.checkWin(currentPlayer);
if (Play.grid.winnerFound === true) {
Play.grid.displayWinner(currentPlayer);
}
return;
}
}
}
})
}
}
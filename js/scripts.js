var turn = [];
var turnCount = 0;
function Players (player){
  this.player = player,
  this.die = 0,
  this.currentScore = 0,
  this.totalScore = 0,
  this.win = false;
}

Players.prototype.roll=function(){
  return this.die = parseInt((Math.random()*6)+1);
}

Players.prototype.currentPoints=function(){
  if (this.die === 1)
    return this.currentScore = 0;
  else
    return this.currentScore += this.die;
}

Players.prototype.totalPoints=function(){
  return this.totalScore += this.currentScore;
}

Players.prototype.endTurn = function(){
   this.currentScore=0;
   if (turnCount===0)
    return turnCount=1;
  else
    return turnCount = 0;
}

Players.prototype.winner = function (){
  if (this.totalScore>=100)
    return this.win = true;
  else
    return this.win = false;
}


$(document).ready(function() {
  var player1;
  var player2;
  var userRoll = [];
  var userCurrent = [];
  var userTotal =[];

  $("form#player1").submit(function(event) {
    event.preventDefault();
    var name1 = $("#player1Name").val();
    player1 = new Players (name1);
    turn.push(player1);
  });

  $("form#player2").submit(function(event) {
    event.preventDefault();
    var name2 = $("#player2Name").val();
    player2 = new Players (name2);
    turn.push(player2);
  });

  $("#roll").click(function(){
    $(".currentName").text(turn[turnCount].player);
    userRoll[turnCount] = turn[turnCount].roll();
    if (userRoll[turnCount]===1)
      turn[turnCount].endTurn();
    $(".roll").text(userRoll[turnCount]);
    userCurrent[turnCount] = turn[turnCount].currentPoints();
    $(".current").text(userCurrent[turnCount]);
  });

  $("#end").click(function(){
    userTotal[turnCount] = turn[turnCount].totalPoints();
    $(".total").text(userTotal[turnCount]);
    $(".totalName").text(turn[turnCount].player);
    if (turn[turnCount].winner())
      alert(turn[turnCount].player +" has won!");
    else
      turn[turnCount].endTurn();
    $(".currentName").text(turn[turnCount].player);
  });

  $("#newGame").click(function(){
    location.reload();
  });
});

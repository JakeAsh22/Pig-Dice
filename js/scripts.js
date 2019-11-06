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
  return this.currentScore=0;
}

Players.prototype.winner = function (){
  if (this.totalScore>=100)
    return this.win = true;
  else
    return this.win = false;
}



var player1 = new Players ("player1");




$(document).ready(function() {
  $("form#player1").submit(function(event) {
    event.preventDefault();
    var player1Name = $("player1Name").val();
  });
});

$(document).ready(function() {
  $("form#player2").submit(function(event) {
    event.preventDefault();
    var player2Name = $("player2Name").val();
  });
});

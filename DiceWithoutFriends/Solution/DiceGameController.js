

rh.dwf.DiceGameController = function() {
  this.roundsComplete = 0;
  this.totalScore = 0;
  
  var diceGameController = this;
  new rh.dwf.DiceRoundController(function(roundScore) {
    diceGameController.handleRoundComplete(roundScore);
  });
  
  if (localStorage.fastestFinish) {
    $("#fastest-finish-message").text("Fastest finish = " + localStorage.fastestFinish + " rounds");
  }
};


rh.dwf.DiceGameController.prototype.handleRoundComplete = function(roundScore) {
  this.roundsComplete++;
  this.totalScore += roundScore;
  $("#score").text(this.totalScore);
  
  if (this.totalScore >= 10000) {
    $(".game-table").html("<h1>You finished in " + this.roundsComplete + " rounds</h1>");
    if (!localStorage.fastestFinish ||  this.roundsComplete < localStorage.fastestFinish) {
      localStorage.fastestFinish = this.roundsComplete;
    }
  } else {
    $("#round").text(this.roundsComplete + 1);
  }
};




rh.dwf.DiceGameController = function($container) {
  this.roundsComplete = 0;
  this.totalScore = 0;
  this.$roundContainer = $(".game-table");
  new rh.dwf.DiceRoundController(this.$roundContainer);
  
  // Setup a listener for a custom event.
  var diceGameController = this;
  this.$roundContainer.on("rh.dwf.roundcomplete", function(event, customData) {
    diceGameController.handleRoundComplete(customData);
  });
  
  
  if (localStorage.fastestFinish) {
    $("#fastest-finish-message").text("Fastest finish = " + localStorage.fastestFinish + " rounds");
  }
};


rh.dwf.DiceGameController.prototype.handleRoundComplete = function(roundScore) {
  this.roundsComplete++;
  this.totalScore += roundScore;
  $("#score").text(this.totalScore);
  
  if (this.totalScore >= 2000) {
    this.$roundContainer.html("<h1>You finished in " + this.roundsComplete + " rounds</h1>");
    if (!localStorage.fastestFinish ||  this.roundsComplete < localStorage.fastestFinish) {
      localStorage.fastestFinish = this.roundsComplete;
    }
  } else {
    $("#round").text(this.roundsComplete + 1);
  }
};


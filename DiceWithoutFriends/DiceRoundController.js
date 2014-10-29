
rh.dwf.DiceRoundController = function(roundCompleteHandler) {
	this.diceRound = new rh.dwf.DiceRound();
	// TODO: Save the roundCompleteHandler into an instance variable to call later.
	this.$score = $("#round-score");
	this.$offTableButtons = $(".dice-row.off-table button");
	this.$onTableButtons = $(".dice-row.on-table button");
	this.$rollButton = $("#btn-roll-again");
	this.$stopButton = $("#btn-stop");
	this.enableButtons();
	this.updateAll();
};


rh.dwf.DiceRoundController.prototype.enableButtons = function() {
	var diceRoundController = this;
	$(".dice-row button").click(function() {
		idComponents = this.id.split("-");
		die = diceRoundController.diceRound.pressedButtonAtLocation(idComponents[3], idComponents[1] == "on");
		diceRoundController.updateDie(die);
		// Update the view for other dice that might have moved.
		for (var i = 0; i < die.otherLocationsToMoveOffTable.length; ++i) {
			dependentDieLocation = die.otherLocationsToMoveOffTable[i];
			dependentDie = diceRoundController.diceRound.getDieAtLocation(dependentDieLocation);
			diceRoundController.updateDie(dependentDie);
		}
		diceRoundController.updateButtonActionStates();
		diceRoundController.updateScore();
	});
	$("#btn-roll-again").click(function() {
    // TODO: Call the function roll on the rh.dwf.DiceRoundController instance variable diceRound
    
    
    // TODO: Call the function updateAll on the rh.dwf.DiceRoundController instance
    
    
  });
  
  $("#btn-stop").click(function() {
    // TODO: Call the roundCompleteHandler that was passed into the constructor.
    //       Set the parameter by calling getRoundScore on the diceRound instance variable.
    
    
    // TODO: Create a new DiceRound and set it to the diceRound instance variable.
    
    
    // TODO: Call updateAll on the rh.dwf.DiceRoundController instance
    

	});
};


rh.dwf.DiceRoundController.prototype.updateAll = function () {
	for (var i = 0; i < 6; ++i) {
		this.updateDie(this.diceRound.getDieAtLocation(i));
	}
	this.updateButtonActionStates();
	this.updateScore();
};


rh.dwf.DiceRoundController.prototype.updateButtonActionStates = function() {
	if (this.diceRound.isRoundOver()) {
		this.$rollButton.prop('disabled', true);
		this.$stopButton.prop('disabled', false);
		this.$stopButton.html("Next Turn");
	} else {
		if (this.diceRound.hasRemovedAnActiveDie()) {
			this.$rollButton.prop('disabled', false);
		} else {
			this.$rollButton.prop('disabled', true);
		}
		this.$stopButton.html("Stop");
		if (this.diceRound.getRoundScore() > 0) {
			this.$stopButton.prop('disabled', false);
		} else {
			this.$stopButton.prop('disabled', true);
		}
	}
};


rh.dwf.DiceRoundController.prototype.updateScore = function() {
	if (this.diceRound.isRoundOver()) {
		this.$score.html("BUST!");
	} else {
		this.$score.html(this.diceRound.getRoundScore());
	}
};


rh.dwf.DiceRoundController.prototype.updateDieButtonClass = function(dieButton, value, disabled) {
  dieButton.className = "btn btn-lg";
  $dieButton = $(dieButton);
  if (value == 0) {
    $dieButton.addClass("invisible");
    return;
  }
  if (disabled) {
    $dieButton.addClass("die-" + value + "-disabled");
  } else {
    $dieButton.addClass("die-" + value);
  }
};


rh.dwf.DiceRoundController.prototype.updateDie = function (die) {
	switch (die.state) {
	case rh.dwf.Die.ACTIVE_ON_TABLE:
    this.updateDieButtonClass(this.$offTableButtons[die.location], 0);
    this.updateDieButtonClass(this.$onTableButtons[die.location], die.value, false);
		break;
	case rh.dwf.Die.ACTIVE_OFF_TABLE:
    this.updateDieButtonClass(this.$offTableButtons[die.location], die.value, false);
    this.updateDieButtonClass(this.$onTableButtons[die.location], 0);
		break;
	case rh.dwf.Die.INACTIVE_ON_TABLE:
    this.updateDieButtonClass(this.$offTableButtons[die.location], 0);
    this.updateDieButtonClass(this.$onTableButtons[die.location], die.value, false);
		break;
	case rh.dwf.Die.INACTIVE_OFF_TABLE:
    this.updateDieButtonClass(this.$offTableButtons[die.location], die.value, true);
    this.updateDieButtonClass(this.$onTableButtons[die.location], 0);
		break;
	}
};
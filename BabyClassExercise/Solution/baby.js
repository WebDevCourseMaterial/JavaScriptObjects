
rh.objectbasics.Baby = function(name) {
  this.name = name;
  this.hoursWithoutFood = 0;
  console.log("Hello baby, " + this.name);
};

rh.objectbasics.Baby.prototype.hourPasses = function() {
  this.hoursWithoutFood++;
  this._outputStatus();
};

rh.objectbasics.Baby.prototype.feedBaby = function() {
  this.hoursWithoutFood = 0;
  this._outputStatus();
};

rh.objectbasics.Baby.prototype._outputStatus = function() {
  switch( this.hoursWithoutFood ) {
    case 0:
	  console.log("Thank you for feeding baby, " + this.name);
	  break;
	case 1:
	  console.log("Baby " + this.name + " is sleeping");
	  break;
	case 2:
	  console.log("Baby " + this.name + " is awake.  Time to feed " + this.name);
	  break;
	default:
	  console.log("Baby " + this.name + " is CRYING uncontrollably!  Feed the baby!");
	  break;
  }
};

/* Namespace */
var rh = rh || {};
rh.objectbasics = rh.objectbasics || {};

$(document).ready(function() {
  var mckinley = new rh.objectbasics.Baby('McKinley');
  var keegan = new rh.objectbasics.Baby('Keegan');
  var bowen = new rh.objectbasics.Baby('Bowen');

  for ( var i = 0; i < 2; ++i) {
    keegan.hourPasses();
    bowen.hourPasses();
    bowen.feedBaby();
    mckinley.feedBaby();
    for ( var j = 0; j < 4; ++j) {
      mckinley.hourPasses();
    }
  }
  keegan.hourPasses();
  bowen.hourPasses();

});



/* Namespace */
var rh = rh || {};
rh.dwf = rh.dwf || {};

$(document).ready( function() {
  new rh.dwf.DiceGameController();

  $("#new-game-button").click( function() {
    window.location.reload();
  });
});



var steps = document.getElementsByClassName("step");
var init_r = false;

$(document).keydown(function(e) {
    if (e.keyCode == 32 || e.keyCode == 13) { // Space and Enter
        $('#dice').trigger('click');
      
    }
});
var safe_stops = [19, 6, 5, 27, 52, 65, 66, 44];

function autorun(){
    $('dice').trigger('click');
    hold(350).then(function(){
        for (i = 0; i < 4; i++) {
        if(current_turn.player[i].current.position+dice_value<=current_turn.player[i].path.length){
            $(current_turn.player[i].controller).trigger('click');
            console.log(current_turn.player[i].current.position+dice_value);
            break;
         
        }
 } })
}
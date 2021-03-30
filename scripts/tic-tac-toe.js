
var gameOver = false;
var totalMove = 0;
var currentPlayer ='X';


function placeMarker(spotID){
    //  place teh marker by changing innerHTML of teh spot
    //  depending on who player is
    //  check if current player has won the game
    //  if yes, display message, set gameOver = true
    //  if no switch players, totalMove++;
    //else
    //  do nothing
    //else(game over)
    //  do nothing

    if (!gameOVer){
    //if the game is not over
    //get spot/elemement by spotId
    var s = document.getElementById('');
    //if spot is empty
    if (s == ' '){
        s.innerHTML == 'X'
        if(totalMove == 9){
            gameOver = true;
            updateMessage();
            break;
        }
        else{
        
            totalMove++
            updateMessage();
            break;
        }
    }
    else{
        break;
    }
    }
}


function updateMessage(){
    var m = document.getElementById('msg');
    if (gameOver == true){
        m.innerHTML = "Game Over";
    }
}


function currentPlayerWon(){
    //get each spot using getElementbyID()
    //for example
}
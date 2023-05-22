function gameoverscreen() {

    background(10)
    cgGameOver.resize(1403,992);
    image(cgGameOver,-61.5,-72,);

    textAlign(CENTER);
    text("GAME OVER",width/2,height/2);

    //reset character values for a new game 
    isPlayerTurn = true;
    cecilia.startOver();
    ue.hp = ue.maxhp;
    eyeCount = eyeMinCount;
    turnPassed = resetTurn;

    }
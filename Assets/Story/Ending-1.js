function ending1() {

  background(0);
  textAlign(CENTER);
  fill(211);
  text("Ending#1",width/2,height/2)
  
    //reset character values for a new game 
    isPlayerTurn = true;
    cecilia.startOver();
    cecilia.damageDealt = 0;
    ue.hp = ue.maxhp;
    eyeCount = eyeMinCount;
    turnPassed = resetTurn;
  
  }
function ending2() {

    background(0);
    cgEnding2.resize(1403,992);
    image(cgEnding2,-61.5,-72,);

  
    textAlign(CENTER);
    fill(211);
    text("Ending#2",width/2,height/2)
    
      //reset character values for a new game 
      isPlayerTurn = true;
      cecilia.startOver();
      cecilia.damageDealt = 0;
      ue.hp = ue.maxhp;
      eyeCount = eyeMinCount
      turnPassed = resetTurn;
    
    }
function ending2() {

    background(0);
    cgEnding2.resize(1403,992);
    image(cgEnding2,-61.5,-72,);
  
    textAlign(LEFT);
    fill(211);
    textFont(novecentoBold)
    textSize(32)
    text("- Cecilia is Devoured -", width * 0.2,height * 0.1)

    textAlign(CENTER);
    textFont(novecentoNormal)
    textSize(12)
    text("(Don't worry little girl, I'll enjoy playing with you until there's nothing left.)", width * 0.5,height * 0.95)
    
      //reset character values for a new game 
      isPlayerTurn = true;
      cecilia.startOver();
      cecilia.damageDealt = 0;
      ue.startOver();
      eyeCount = eyeMinCount
      turnPassed = resetTurn;
    
    }
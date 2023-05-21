// cecilia = new Cecilia() ;

function damageDone(){

    push();

    textAlign(LEFT);
    textFont(novecentoNormal);
    // stroke(10);
    // strokeWeight(2);
    fill(211);
    textSize(20);
    text('Damage Dealt', width * 0.02, height * 0.1);

    pop();

    push();

    textAlign(LEFT);
    textFont(novecentoBold);
    // stroke(10);
    // strokeWeight(4);
    fill(255);
    textSize(32);
    text(cecilia.damageDealt, width * 0.02, height * 0.1 + 32);

    pop();

}
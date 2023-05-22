// cecilia = new Cecilia() ;
let playerAttackName = ["", "Quick Slash", "MemoryBlade", "Memory Blade EX"];
let playerSpecialAttackName = ["", "Energized Thrust", "Memory Burst", "Memory Burst EX"];
let playerSkillName = ["", "Memory Discharge", "Memory Overflow"];

function damageDone(){

    push();

    textAlign(LEFT);
    textFont(novecentoNormal);
    fill(211);
    textSize(20);
    text('TOTAL DMG', width * 0.02, height * 0.1);

    pop();

    push();

    textAlign(LEFT);
    textFont(novecentoBold);
    fill(255);
    textSize(32);
    if (cecilia.damageDealt <= cecilia.minDamageDealt){
    text(cecilia.minDamageDealt, width * 0.02, height * 0.1 + 32);
    } else {
    text(cecilia.damageDealt, width * 0.02, height * 0.1 + 32);
    }

    pop();

}

function calledAction() {

    push();

    textAlign(CENTER);
    textFont(novecentoBold);
    fill(211);
    textSize(20);

        if(!cecilia.isOverDrive && !cecilia.isAssaultMode && cecilia.damageDealt > cecilia.minDamageDealt){
            text(playerAttackName[1], width * 0.5, height * 0.17 )
        } 
        if (cecilia.isAssaultMode && cecilia.damageDealt > cecilia.minDamageDealt) {
            text(playerAttackName[2], width * 0.5, height * 0.17 )
        } 
        if (cecilia.isOverDrive && cecilia.damageDealt > cecilia.minDamageDealt) {
            text(playerAttackName[3], width * 0.5, height * 0.17 )
        } 
        if (!isPlayerTurn) {
            text(playerAttackName[0], width * 0.5, height * 0.17 )
        }

    pop();

    
}
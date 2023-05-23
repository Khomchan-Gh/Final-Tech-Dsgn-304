let playerAttackName = ["", "Quick Slash", "MemoryBlade", "Memory Blade EX"];
let playerSpecialAttackName = ["", "Energized Thrust", "Memory Burst", "Memory Burst EX"];
let playerSkillName = ["", "Memory Discharge", "Memory Overflow"];

let enemyAttackName = ["", "Void Fragment", "Abyssal Ripper"];
let enemySkillName = ["", "Claw of the Void", "Energy Drain", "Memory Devour", "Destruction Ray", "Mind Breaker", "Eye of the Abyssal Darkness"];

let baseHeight = 1080;
let actionNameHeight = baseHeight * 0.1;

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

        //Player Action

        if(!cecilia.isOverDrive && !cecilia.isAssaultMode && cecilia.damageDealt > cecilia.minDamageDealt && cecilia.isAttacking){
            text("< " + playerAttackName[1] + " >", width * 0.5, actionNameHeight )
        }
        
        fill (106,235,254);
        if (cecilia.isAssaultMode && cecilia.damageDealt > cecilia.minDamageDealt && cecilia.isAttacking) {
            text("< " + playerAttackName[2] + " >", width * 0.5, actionNameHeight )
        } 
        if (cecilia.isOverDrive && cecilia.damageDealt > cecilia.minDamageDealt && cecilia.isAttacking) {
            text("< " + playerAttackName[3] + " >", width * 0.5, actionNameHeight )
        }

        fill (254, 190, 0);
        if (cecilia.isAssaultMode && cecilia.isSwitching && !cecilia.isAttacking && !cecilia.isChargeAttacking) {
            text("< " + playerSkillName[1] + " >", width * 0.5, actionNameHeight )
        } 

        fill (106,235,254);
        if (cecilia.isOverDrive && cecilia.isSwitching && !cecilia.isAttacking && !cecilia.isChargeAttacking) {
            text("< " + playerSkillName[2] + " >", width * 0.5, actionNameHeight )
        } 

        if(!cecilia.isOverDrive && !cecilia.isAssaultMode && cecilia.damageDealt > cecilia.minDamageDealt && cecilia.isChargeAttacking){
            text("< " + playerSpecialAttackName[1] + " >", width * 0.5, actionNameHeight )
        } 
        if (cecilia.isAssaultMode && cecilia.damageDealt > cecilia.minDamageDealt && cecilia.isChargeAttacking) {
            text("< " + playerSpecialAttackName[2] + " >", width * 0.5, actionNameHeight )
        } 
        if (cecilia.isOverDrive && cecilia.damageDealt > cecilia.minDamageDealt && cecilia.isChargeAttacking) {
            text("< " + playerSpecialAttackName[3] + " >", width * 0.5, actionNameHeight )
        }


        if (!cecilia.isAttacking || !cecilia.isSwitching || !cecilia.isChargeAttacking) {
            text(playerAttackName[0], width * 0.5, actionNameHeight )
        }


        //Enemy Action

        fill(203, 195, 227);

        if(ue.isAttacking && ue.damage > ue.defaultDamage && ue.damage <= ue.maxNormalAttackDMG) {
            text("< " + enemyAttackName[1] + " >", width * 0.5, actionNameHeight )
        } else if(ue.isAttacking && ue.damage > ue.maxNormalAttackDMG) {
            text("< " + enemyAttackName[2] + " >", width * 0.5, actionNameHeight )
        }

        fill(191, 64, 191);

        if(ue.isCasting && ue.specialAttackAction === 1) {
            text("< " + enemySkillName[1] + " >", width * 0.5, actionNameHeight )
        } else if(ue.isDraining && ue.specialAttackAction === 2) {
            text("< " + enemySkillName[2] + " >", width * 0.5, actionNameHeight )
        } else if(ue.isDraining && ue.specialAttackAction === 3) {
            text("< " + enemySkillName[3] + " >", width * 0.5, actionNameHeight )
        }

        //phase 2 action display
        if(ue.hp <= ue.maxhp * 0.5 && ue.isCasting && ue.specialAttackActionPhase2 === 1) {
            text("< " + enemySkillName[4] + " >", width * 0.5, actionNameHeight )
        } else if(ue.hp <= ue.maxhp * 0.5 && ue.isDraining && ue.specialAttackActionPhase2 === 2) {
            text("< " + enemySkillName[5] + " >", width * 0.5, actionNameHeight )
        }

        if (ue.isSummoning) {
            text("< " + enemySkillName[6] + " >", width * 0.5, actionNameHeight )
        }



        if (!ue.isAttacking || !ue.isCasting) {
            text(enemyAttackName[0], width * 0.5, actionNameHeight )
        }

    pop();

    
}
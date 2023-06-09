class UE {
  
    constructor(){
    
      this.x = this.x
      this.y = this.y

      //Load image
      this.ue8 = uE
      this.ue8IsOnAction = uEAction
      this.ue8Phase2 = uE2
      this.ue8Phase2IsOnAction = uE2Action
      this.ueIsDead = uEDead

      //Hp bar value
      this.maxhp = 15000
      this.hp = 15000

      this.maxHpBarWidth = 400;
      this.maxHpBarHeight = 14;
      this.hpBarWidth = 395;
      this.hpBarHeight = 10;
      
      //Special attack
      this.maxSpecialAttackCharge = 5
      this.maxSpecialAttackChargePhase2 = 3

      this.specialAttackCharge = 0
      this.specialAttackChargePhase2 = 0
      this.minSpecialAttackCharge = 0

      this.specialAttackAction = this.specialAttackAction;
      this.specialAttackActionPhase2 = this.specialAttackActionPhase2;

      //damage values
      this.maxNormalAttackDMG = 22
      this.minNormalAttackDMG = 13

      this.maxNormalAttackDMGPhase2 = 48
      this.minNormalAttackDMGPhase2 = 24

      this.damage = this.damage;
      this.defaultDamage = 0;

       //Character Status & Animation
      this.isAttacked = false;
      this.isHeavyDamaged = false;

      this.isDeath = false;
      this.isImmune = false;

      this.isAttacking = false;
      this.isCasting = false;
      this.isDraining = false;
      this.isSummoning = false;
      
    }
    
      show(){
      
      //character sprite

      if(this.hp > this.maxhp * 0.5 && this.isAttacking === false && this.isCasting === false && this.isSummoning === false && this.isDraining === false && this.isDeath === false){
      image(this.ue8, width-525, -25, width*0.32, height*0.82)

      } else if (this.hp <= this.maxhp * 0.5) {
        image(this.ue8Phase2, width-525, -25, width*0.32, height*0.82)

      }

      let currentHpBarWidth = map(this.hp, 0, this.maxhp, 0, this.hpBarWidth);
  
      //name
      textAlign(CENTER);
      fill(211);

      if (this.specialAttackCharge === this.maxSpecialAttackCharge || this.specialAttackChargePhase2 === this.maxSpecialAttackChargePhase2 ){
        fill(254, 190, 0);
      }

      if (this.isDeath === true) {
        fill(10);
      }

      textFont(novecentoNormal);
      textSize(18);
      text('# VIII (Abyssal Devourer)',width/2, height * 0.05);
      
      //max hp bar
      
      stroke(255);
      
      //when max charge is full, health bar color change for player
      if (this.specialAttackCharge === this.maxSpecialAttackCharge || this.specialAttackChargePhase2 === this.maxSpecialAttackChargePhase2 ){
        stroke(254, 190, 0);
      }

      fill(60);
      rectMode(CENTER);
      rect(width / 2, height * 0.08, this.maxHpBarWidth, this.maxHpBarHeight);

      //current hp bar
      noStroke();
      rectMode(CORNER);
      let x = (width / 2) - (this.hpBarWidth / 2);
      let y = height * 0.08 - (this.hpBarHeight / 2);
      for (let n = 0; n < currentHpBarWidth; n++){
        fill(211);
        rect(x + n, y, 1, this.hpBarHeight);
      }
    
    }

    attack1(cecilia){
      
      if (cecilia.isImmune) {
        this.damage = 0;

      } else {
        this.damage = Math.round(Math.random() * (this.maxNormalAttackDMG  - this.minNormalAttackDMG  + 1)) + this.minNormalAttackDMG ;
        cecilia.isAttacked = true;
        this.isAttacking = true;
        this.specialAttackCharge += 1;

      }
      
      if(this.specialAttackCharge < this.maxSpecialAttackCharge + 1) {
        cecilia.hp = cecilia.hp - this.damage;
      }

      if (this.specialAttackCharge === this.maxSpecialAttackCharge + 1) {
        this.specialAttackAction = Math.floor(Math.random() * 3) + 1;
        this.isAttacking = false;

        if(this.specialAttackAction === 1) {
          cecilia.hp = Math.floor(cecilia.hp - (this.damage * 2));
          cecilia.isAttacked = true;
          this.isCasting = true;
        }

        if(this.specialAttackAction === 2) {
          cecilia.mp = cecilia.mp - 90;
          this.isDraining = true;
        }

        if(this.specialAttackAction === 3) {
          cecilia.sp = cecilia.sp - 20;
          cecilia.gauge = cecilia.gauge - 20;
          this.isDraining = true;
        }
      
        this.specialAttackCharge = this.minSpecialAttackCharge;

      }

      return cecilia;
      
    }

    attack2(cecilia){

      if (cecilia.isImmune) {
        this.damage = 0;

      } else {
        this.damage = Math.round(Math.random() * (this.maxNormalAttackDMGPhase2 - this.minNormalAttackDMGPhase2  + 1)) + this.minNormalAttackDMGPhase2 ;
        cecilia.isAttacked = true;
        this.specialAttackCharge = this.minSpecialAttackCharge;
        this.specialAttackChargePhase2 += 1;
        this.isAttacking = true;

      }
      
      if(this.specialAttackCharge < this.maxSpecialAttackCharge + 1) {
        cecilia.hp = cecilia.hp - this.damage;
        this.isAttacking = true;
      }

      if (this.specialAttackChargePhase2 === this.maxSpecialAttackChargePhase2 + 1) {
        this.specialAttackActionPhase2 = Math.floor(Math.random() * 2) + 1;
        this.isAttacking = false;

        if(this.specialAttackActionPhase2 === 1) {
          cecilia.hp = Math.floor(cecilia.hp - (this.damage * 3));
          cecilia.isAttacked = true;
          this.isCasting = true;
        }

        if(this.specialAttackActionPhase2 === 2) {
          cecilia.mp = cecilia.mp - 120;
          cecilia.sp = cecilia.sp - 30;
          cecilia.gauge = cecilia.gauge - 30;
          this.isDraining = true;
        }

        this.specialAttackChargePhase2 = this.minSpecialAttackCharge;

      }

      return cecilia;
      
    }
    
    summonEye (){
      this.isSummoning = true;
      eyeCount += 1;

    }
    
    isDead(){
      this.isDeath = true;
    }

    update () {

      if(this.hp > this.maxhp * 0.5 && this.specialAttackCharge === this.maxSpecialAttackCharge || this.isDraining && this.hp > this.maxhp * 0.5 || this.isAttacking && this.hp > this.maxhp * 0.5 || this.isCasting && this.hp > this.maxhp * 0.5) {
        image(this.ue8IsOnAction, width - 525, -25, width * 0.32, height * 0.82)
      }

      if(this.hp <= this.maxhp * 0.5 && this.specialAttackChargePhase2 === this.maxSpecialAttackChargePhase2){
        image(this.ue8Phase2IsOnAction, width - 525, -25, width * 0.32, height * 0.82)
      }

      if(this.isDeath === true){
        image(this.ueIsDead, width-525, -25, width*0.32, height*0.82)
      }

    }

    startOver(){
      this.hp = this.maxhp
      this.specialAttackCharge = this.minSpecialAttackCharge
      this.specialAttackCharge = this.minSpecialAttackCharge
    }


  }

 

  class EyePortal {
    constructor(){
      this.x = this.x
      this.y = this.y
      this.eyeportal = eyePortal
    }

    show(x,y){
      image(this.eyeportal,x,y,width * 0.3,height * 0.5)
    }

  }

  class UeHitEffect {
    constructor(){
      this.x = this.x
      this.y = this.y
      this.direction = this.direction

      //load image
      this.ueVoidFragment = uEHit1
      this.ueVoidClaw = uEHit2
      this.ueRipper = uEHit3
      this.ueDRay = uESpecialHit
      this.ueDrain = uESkill

    }

    update(){
      if(ue.isAttacking && ue.hp > ue.maxhp * 0.5){
        image(this.ueVoidFragment, 140, 75, width * 0.3,height * 0.5)
      } else if (ue.isAttacking && ue.hp <= ue.maxhp * 0.5) {
        image(this.ueRipper, 120, 75, width * 0.4,height * 0.6)
      }

      if(ue.isCasting && ue.hp > ue.maxhp * 0.5){
        image(this.ueVoidClaw, 140, 75, width * 0.3,height * 0.5)
      } else if (ue.isCasting && ue.hp <= ue.maxhp * 0.5) {
        image(this.ueDRay, -160, height - 900, width * 0.85, height)
      }

      if(ue.isDraining){
        image(this.ueDrain, width * 0.35, 75, width * 0.3,height * 0.5)
      }

    }

  }

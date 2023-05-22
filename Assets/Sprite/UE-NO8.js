class UE {
  
    constructor(){
    
      this.x = this.x
      this.y = this.y
      this.maxhp = 15000
      this.hp = 15000
      this.ue8 = uE

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
      this.minSpecialAttackCharge = 0

      this.specialAttackAction = this.specialAttackAction;

      //damage values
      this.maxNormalAttackDMG = 13
      this.minNormalAttackDMG = 22

      this.maxNormalAttackDMGPhase2 = 22
      this.minNormalAttackDMGPhase2 = 48

      this.damage = this.damage;

      
    }
    
      show(){
      
      image(this.ue8,width-525,-25, width*0.32, height*0.82)
      let currentHpBarWidth = map(this.hp, 0, this.maxhp, 0, this.hpBarWidth);
  
      //name
      textAlign(CENTER);
      fill(211);
      textFont(novecentoNormal);
      textSize(18);
      text('# VIII (Devourer of Eternity)',width/2, height * 0.05);
      
      //max hp bar
      
      stroke(255);
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

      }

      this.specialAttackCharge += 1;
      
      if(this.specialAttackCharge < this.maxSpecialAttackCharge + 1) {
        cecilia.hp = cecilia.hp - this.damage;
      }

      if (this.specialAttackCharge === this.maxSpecialAttackCharge + 1) {
        this.specialAttackAction = Math.floor(Math.random() * 3) + 1;

        if(this.specialAttackAction === 1) {
          cecilia.hp = Math.floor(cecilia.hp - (this.damage * 2));
        }

        if(this.specialAttackAction === 2) {
          cecilia.mp = cecilia.mp - 90;
        }

        if(this.specialAttackAction === 3) {
          cecilia.sp = cecilia.sp - 20;
          cecilia.gauge = cecilia.gauge - 20;
        }
      
        this.specialAttackCharge = this.minSpecialAttackCharge;

      }

      return cecilia;
      
    }

    chargeSpecialAttack(){
      
      this.specialAttackCharge += 1;

    }

    attack2(cecilia){

      if (cecilia.isImmune) {
        this.damage = 0;

      } else {
        this.damage = Math.round(Math.random() * (this.maxNormalAttackDMGPhase2 - this.minNormalAttackDMGPhase2  + 1)) + this.minNormalAttackDMGPhase2 ;

      }

      this.specialAttackCharge += 1;
      
      if(this.specialAttackCharge < this.maxSpecialAttackCharge + 1) {
        cecilia.hp = cecilia.hp - this.damage;
      }

      if (this.specialAttackCharge === this.maxSpecialAttackChargePhase2 + 1) {
        this.specialAttackAction = Math.floor(Math.random() * 2) + 1;

        if(this.specialAttackAction === 1) {
          cecilia.hp = Math.floor(cecilia.hp - (this.damage * 2.5));
        }

        if(this.specialAttackAction === 2) {
          cecilia.mp = cecilia.mp - 120;
          cecilia.sp = cecilia.sp - 30;
          cecilia.gauge = cecilia.gauge - 30;
        }

        this.specialAttackCharge = this.minSpecialAttackCharge;

      }

      return cecilia;
      
    }
    
    summonEye (){
      eyeCount += 1;

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

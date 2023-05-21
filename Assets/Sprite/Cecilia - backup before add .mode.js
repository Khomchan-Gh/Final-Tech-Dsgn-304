class Cecilia {
  
    constructor(){
      
      this.x = this.x
      this.y = this.y
      this.maxhp = 500
      this.hp = 500
      this.minhp = 0
      this.maxmp = 300
      this.mp = 300
      this.minmp = 0
      this.maxsp = 10
      this.sp = 10
      this.CeciliaStandBy = ceciliaStandby
      this.CeciliaAtk = ceciliaAttack
      this.CeciliaSkill = ceciliaSkill
      this.CeciliaAssault = ceciliaAssault
      
      this.assaultModeActivateMpCost = 30;
      this.assaultModeAttackMpCost = 15;

      this.isAttacking = false;
      
      this.isSwitching = false;
      this.isAssaultMode = false;
      this.isOverDrive = false;

      // this.attackStartTime = 0;
      // this.attackDuration = 750;
      // this.castStartTime = 0;
      // this.castDuration = 750;
      
    }
    
      show(){
      
      if (this.isAttacking === false && this.isSwitching === false && this.isAssaultMode === false && this.isOverDrive === false){
      image(this.CeciliaStandBy,150,75, width*0.25, height*0.6)
      };
    
    }
    
    attack1(ue){
      
      let attackPower = Math.floor(Math.random() * (62 - 47 + 1)) + 47;
      if (this.isAssaultMode) {
        attackPower = Math.floor(Math.random() * (93 - 70 + 1)) + 70;
        this.mp -= this.assaultModeAttackMpCost;
      }
      ue.hp -= attackPower;
      return ue;
      
    }

    // attackAnimation(){
    //   this.isAttacking = true;
    //   this.attackStartTime = millis();

    // }

    assaultMode(){
        this.isAssaultMode = true;
        this.mp -= this.assaultModeActivateMpCost;
    }



    
    update() {
      if (this.isAssaultMode) {
        image(this.CeciliaAssault, 150, 75, width*0.25, height*0.6);
      } else {
        image(this.CeciliaStandBy, 150, 75, width*0.25, height*0.6);
      }

    }

    startOver(){
      this.hp = this.maxhp
      this.mp = this.maxmp
      this.sp = this.maxsp
      this.isAttacking = false;
      this.isSwitching = false;
      this.isAssaultMode = false;
      this.isOverDrive = false;
    }

  }
  
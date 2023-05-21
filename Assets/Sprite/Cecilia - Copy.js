class Cecilia {
  
    constructor(){
      
      this.x = 50
      this.y = 0
      this.hp = 500
      this.mp = 250
      this.sp = 10
      this.CeciliaStandBy = ceciliaStandby
      this.CeciliaAtk = ceciliaAttack
      this.CeciliaSkill = ceciliaSkill
      this.isAttacking = false;
      this.attackStartTime = 0;
      this.attackDuration = 750;
      this.castingSkill = false;
      this.castStartTime = 0;
      this.castDuration = 750;
      
    }
    
      show(){
      
      if (this.isAttacking === false && this.castingSkill === false){
      image(this.CeciliaStandBy,50,0, 546, 584)
      };
    
    }
    
    attack1(ue){
      
      ue.hp = ue.hp - 50;
    
      return ue;
      
    }

    attackAnimation(){
      this.isAttacking = true;
      this.attackStartTime = millis();

    }

    skill1(ue){
      ue.hp = ue.hp - 50;
      ue.hp = ue.hp - 50;
      this.skillCasted();
      return ue;
    }

    skillCasted(){
      this.mp = this.mp -50;
    }

    skillAnimation(){
      this.castingSkill = true;
      this.castStartTime = millis();

    }
    
    update() {
      if (this.isAttacking) {
        let timeSinceAttackStarted = millis() - this.attackStartTime;
        if (timeSinceAttackStarted < this.attackDuration) {
          this.CeciliaAtk.resize(546, 584);
          image(this.CeciliaAtk, 400, 0);
        } else {
          this.isAttacking = false;
        }
      }

      if (this.castingSkill) {
 
        let timeSinceSkillCasted = millis() - this.castStartTime;
        if (timeSinceSkillCasted < this.castDuration) {
          image(this.CeciliaSkill, 400, 0, 546, 584);
        } else {
          this.castingSkill = false;
        }
      }

    }

  }
  
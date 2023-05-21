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
      this.maxSpecialAttackCharge = this.maxSpecialAttackCharge
      this.specialAttackCharge = 0
      this.minSpecialAttackCharge = 0

      
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
      
      //แก้เลขทีหลัง
      cecilia.hp = cecilia.hp - 20;
    
      return cecilia;
      
    }

    chargeSpecialAttack(){
      
      this.specialAttackCharge += 1;

    }

    attack2(cecilia){
      
      //แก้เลขทีหลัง
      cecilia.hp = cecilia.hp - 40;
      eyeCount += 1;

      return cecilia;
      
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

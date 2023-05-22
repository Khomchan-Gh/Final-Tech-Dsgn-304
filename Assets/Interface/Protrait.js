function ceciliaDefaultPortrait(){

  if (!cecilia.isAttacked) {
    image(ceciliaProtrait,-250,400,708,1002);
    } else if (cecilia.isAttacked === true) { 
      image(ceciliaDamagedProtrait,-250,400,708,1002);
    }

    if (cecilia.isHeavyDamaged === true) {
      image(ceciliaDamagedProtrait,-250,400,708,1002);
      } else if (!cecilia.isHeavyDamaged) { 
        image(ceciliaProtrait,-250,400,708,1002);
      }

      if (cecilia.isDeath === true) {
        image(ceciliaKoProtrait,-250,400,708,1002);
      }

  }

function ceciliaOverDrivePortrait(){

  if (!cecilia.isAttacked) {
    image(ceciliaProtraitOverDrive,-200,430,884,956);
    } else if (cecilia.isAttacked === true) {
      image(ceciliaDamagedProtraitOverDrive,-200,430,884,956);
    }

  if (cecilia.isHeavyDamaged === true) {
    image(ceciliaDamagedProtraitOverDrive,-200,430,884,956);
    } else if (!cecilia.isHeavyDamaged) {
      image(ceciliaProtraitOverDrive,-200,430,884,956);
    }

    if (cecilia.isDeath === true) {
      image(ceciliaOverDriveKoProtrait,-200,430,884,956);
    }
  
  }
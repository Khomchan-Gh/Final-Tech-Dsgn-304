
// cecilia = new Cecilia();

function ceciliaName(){
  
  textAlign(LEFT);
  textSize(16);
  fill(211);
  textFont(novecentoNormal);
  text('Action Detail', width * 0.43, height * 0.80);
  
}

function statusHp(){
  
  let currentHpBarWidth = round(map(cecilia.hp, 0, cecilia.maxhp, 0, cecilia.hpBarWidth));

  textAlign(LEFT);
  textSize(16);
  fill(211);
  textFont(novecentoNormal);
  text('HP: '+cecilia.hp,width * 0.03 ,height * 0.91-8);
  
  //max hp bar
      
  stroke(255);
  fill(60);
  rectMode(LEFT);
  rect(width * 0.03, height * 0.91, cecilia.maxHpBarWidth, cecilia.maxHpBarHeight);

  //current hp bar
  noStroke();
  rectMode(CORNER);
  let x = width * 0.032 ;
  let y = height * 0.913 ;
  for (let n = 0; n < currentHpBarWidth; n++){
    if (cecilia.hp >= cecilia.maxhp * 0.3){
    fill(211);
    rect(x + n, y, 2, cecilia.hpBarHeight);
    } else {
      fill(220,20,60);
      rect(x + n, y, 2, cecilia.hpBarHeight);
    }
  } 
    
}

function statusMp(){
  
  let currentMpBarWidth = round(map(cecilia.mp, 0, cecilia.maxmp, 0, cecilia.mpBarWidth));
  
  textAlign(LEFT);
  textSize(12);
  fill(254, 190, 0);
  textFont(novecentoNormal);
  text('Energy: '+cecilia.mp,width * 0.03 ,height * 0.95-6);

  
  //max mp bar
      
  stroke(255);
  fill(60);
  rectMode(LEFT);
  rect(width * 0.03, height * 0.95, cecilia.maxMpBarWidth, cecilia.maxMpBarHeight);

  //current mp bar
  noStroke();
  rectMode(CORNER);
  let x = width * 0.032 ;
  let y = height * 0.953 ;
  for (let n = 0; n < currentMpBarWidth; n++){
    if (cecilia.mp >= cecilia.maxmp * 0.3){
    fill(254, 190, 0);
    rect(x + n, y, 2, cecilia.mpBarHeight);
    } else {
      fill(254, 190, 0);
      rect(x + n, y, 2, cecilia.mpBarHeight);
    }
  } 
    
}

function statusSp(){
  
  let currentSpBarWidth = round(map(cecilia.sp, 0, cecilia.maxsp, 0, cecilia.spBarWidth));

  textAlign(LEFT);
  textSize(12);
  fill(106,235,254);
  textFont(novecentoNormal);
  text('Memory Gauge: '+cecilia.sp,width * 0.03 ,height * 0.99-6);

    //max sp bar
      
    stroke(255);
    fill(60);
    rectMode(LEFT);
    rect(width * 0.03, height * 0.99, cecilia.maxSpBarWidth, cecilia.maxSpBarHeight);
  
    //current sp bar
    noStroke();
    rectMode(CORNER);
    let x = width * 0.032 ;
    let y = height * 0.993 ;
    for (let n = 0; n < currentSpBarWidth; n++){
      if (cecilia.sp >= cecilia.maxsp * 0.3){
      fill(106,235,254);
      rect(x + n, y, 2, cecilia.spBarHeight);
      } else {
        fill(106,235,254);
        rect(x + n, y, 2, cecilia.spBarHeight);
      }
    } 
    
}

function statusSpAttackGauge(){

  let currentSpAtkBarWidth = round(map(cecilia.gauge, 0, cecilia.maxgauge, 0, cecilia.gaugeBarWidth));

  // textAlign(LEFT);
  // textSize(24);
  // fill(255);
  // //text('C.A. : '+cecilia.gauge, 150, 400);

  //max mp bar
      
  stroke(211);
  noFill();
  rectMode(LEFT);
  rect(width * 0.716, height * 0.84, cecilia.maxSpAtkBarWidth, cecilia.maxSpAtkBarHeight);

  //current mp bar
  noStroke();
  rectMode(CORNER);
  let x = width * 0.717 ;
  let y = height * 0.843 ;
  for (let n = 0; n < currentSpAtkBarWidth; n++){
    if (cecilia.gauge < cecilia.maxgauge ){
    fill(211);
    rect(x + n, y, 2, cecilia.gaugeBarHeight);
    } else {
      fill(106,235,254);
      rect(x + n, y, 2, cecilia.gaugeBarHeight);
    }
  } 
}
let currentScreen = "menu";
let isPlayerTurn;

let turnPassed = 1;
let resetTurn = 1;

let cecilia;
let playerHitEffect;
let ue;
let ueHp;
let eyePortal;
let novecentoBold, novecentoNormal, novecentoLight;
let actionDelay;
let playerActioDelay = 0;
let endingDelay = 0;
let screenDelay;

let damageDisplayText; 


let buttonCreated = false;
let AtkButton, SkillButton, SpButton;

let isAtkMouseOver = false;
let isSpAtkMouseOver = false;
let isSkillMouseOver = false;
let isOverDriveButtonMouseOver = false;

let defaultAlp = 255;
let alp = 255;
let alp2 = 255;

let eyeMinCount = 0;
let eyeCount = 0;
let eyeMaxCount = 7;

let gameIsCleared = false;

function preload() {

  //load empty image
  isHidden = loadImage('Assets/Image/Empty.png');
  
  //load fonts
  menuTitle = loadFont('Assets/Fonts/Novecento Bold.otf');
  novecentoBold = loadFont('Assets/Fonts/Novecento Bold.otf');
  novecentoNormal = loadFont('Assets/Fonts/Novecento Normal.otf');
  novecentoLight = loadFont('Assets/Fonts/Novecento Light.otf');

  //load button

  normalAttackButton = loadImage('Assets/Button/Attack-Button.png');
  normalAttackButtonOver = loadGif('Assets/Button/Attack-Button-Over-Animation.gif')
  overDriveAttackButton = loadImage('Assets/Button/Attack-Button-Overdrive.png');
  
  switchModeButton = loadImage('Assets/Button/Switch-Mode.png');
  switchModeButtonDisable = loadImage('Assets/Button/Switch-Mode-Disable.png');
  switchModeButtonOver = loadGif('Assets/Button/Switch-Mode-Over-Animation.gif');
  
  enhancedNormalAttackButton = loadImage('Assets/Button/Attack-Button-Burst.png');
  enhancedNormalAttackDisable = loadImage('Assets/Button/Attack-Button-Burst-Disable.png');
  enhancedNormalAttackOver = loadGif('Assets/Button/Attack-Button-Burst-Over-Animation.gif')
  
  overDriveButton = loadImage('Assets/Button/OverDrive-Button.png');
  overDriveButtonOver = loadGif('Assets/Button/OverDrive-Button-Over-Animation.gif');
  overDriveButtonDisable = loadImage('Assets/Button/OverDrive-Button-Disable.png');
  
  //load player's assets
  ceciliaStandby = loadImage('Assets/Characters/Cecilia-Stance1.png');
  ceciliaAttack = loadImage('Assets/Characters/Cecilia-Attack.png');
  
  ceciliaAssault = loadImage('Assets/Characters/Cecilia-Assault.png');
  ceciliaAssaultAttack = loadImage('Assets/Characters/Cecilia-Assault-Attack.png');
  ceciliaAssaultMemoryBlade = loadImage('Assets/Characters/Cecilia-Assault-Memory-Blade.png');
  ceciliaAssaultOverFlowBlade = loadImage('Assets/Characters/Cecilia-Assault-Overflow-Blade.png');

  ceciliaOverDrive = loadImage('Assets/Characters/Cecilia-OverDrive-Default.png');
  ceciliaOverDriveAttack = loadImage('Assets/Characters/Cecilia-OverDrive-Attack.png');
  ceciliaOverDriveMemoryBlade = loadImage('Assets/Characters/Cecilia-OverDrive-Memory-Blade.png');
  ceciliaOverDriveMemoryBladeBack = loadImage('Assets/Characters/Cecilia-OverDrive-Memory-Blade-Back.png');

  //load character's protrait
  ceciliaProtrait = loadImage('Assets/Image/Cecilia.png');
  ceciliaDamagedProtrait = loadImage('Assets/Image/Cecilia-Damaged.png');
  ceciliaProtraitOverDrive = loadImage('Assets/Image/Cecilia-Portrait-OverDrive.png');
  ceciliaDamagedProtraitOverDrive = loadImage('Assets/Image/OverDrive-Cecilia-Damaged.png');
  ceciliaKoProtrait = loadImage('Assets/Image/Cecilia-Death.png');
  ceciliaOverDriveKoProtrait = loadImage('Assets/Image/Overdrive-Cecilia-Death.png');

  //load player's hit effect
  ceciliaNormalHit1 = loadImage('Assets/Hit-Effect/Normal-Attack-1.png');
  ceciliaNormalHit2 = loadImage('Assets/Hit-Effect/Normal-Attack-2.png');
  ceciliaSpecialHit1 = loadImage('Assets/Hit-Effect/Special-Attack-1.png');
  ceciliaSpecialHit2 = loadImage('Assets/Hit-Effect/Special-Attack-2.png');
  ceciliaSpecialHit3 = loadImage('Assets/Hit-Effect/Special-Attack-3.png');
  
  //load background
  mainmenuBg = loadImage('Assets/Background/mainmenu.png');
  stageBg = loadImage('Assets/Background/Stage-Bg.png');
  stageBgPhase2 = loadImage('Assets/Background/Stage-Bg-Phase-2.png');
  stageBgPhase2Ex = loadImage('Assets/Background/Stage-Bg-Phase-2-ex.png');
  
  //load enemy's asset
  uE = loadImage('Assets/Enemy/Unknown_Entity_NO8.png');
  eyePortal = loadGif('Assets/Enemy/Eye-Portal.gif');

  //load enemy's hit effect
  uEHit1 = loadImage('Assets/Hit-Effect/UE-Attack-1.png');
  uEHit2 = loadImage('Assets/Hit-Effect/UE-Attack-2.png');
  uESpecialHit = loadImage('Assets/Hit-Effect/UE-Special-Attack.png');
  
  //load ending
  cgEnding2 = loadImage('Assets/Ending/Ending_2_CG.png');
  cgGameOver = loadImage('Assets/Ending/GameOver_CG.png')

}

function setup() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    textAlign(CENTER)
    text("The game is currently not available on Smartphone", width * 0.5, height * 0.5);
    
  } else {
    
  createCanvas(1280, 720);
  
  cecilia = new Cecilia();
  ue = new UE();
  eyePortal = new EyePortal();
  
  playerHitEffect = new CeciliaHit();
  memoryblade = new MemoryBlade();
  overflowblade = new OverFlowBlade();
  
  isPlayerTurn = true;
  }
}

function draw() {
  
  clear();

  if (currentScreen === "menu") {
    drawMenuScreen();
    if (!buttonCreated){
  playButton();
  galleryButton();
  creditsButton();
  buttonCreated = true;
    }
  }
  
  if (currentScreen === "intro") {
    drawIntroScreen();
    if (buttonCreated){
      buttonCreated = false;
        }
  }
  
  if (currentScreen === "gameplay") {
    drawGamePlayScreen();
    damageDone();
    calledAction();

  }
  
  if (currentScreen === "ending_1") {
    drawEnding1();
    if (buttonCreated){
      buttonCreated = false;
        }

  }

  if (currentScreen === "ending_2") {
    drawEnding2();
    if (buttonCreated){
      buttonCreated = false;
        }
    
  }

  if (currentScreen === "ending_3") {
    drawEnding3();
    if (buttonCreated){
      buttonCreated = false;
        }
    
  }
  
  if (currentScreen === "game_over") {
    gameOver();
    if (buttonCreated){
      buttonCreated = false;
        }
  }
  


  
}

function drawMenuScreen() {
  background(30);
  title();

  //remove button in previous screen
  var elements = document.getElementsByClassName("hidden3");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

function drawIntroScreen() {
  
  background(10);
  intro();

  //remove button in previous screen
  var elements = document.getElementsByClassName("hidden1");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  
}

function drawGamePlayScreen() {
  
  background(0);


  //remove button in previous screen
  var elements = document.getElementsByClassName("hiddenI");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  
  if (ue && ue.hp >= ue.maxhp/2){
  stageBg.resize(1403,992);
  image(stageBg,-123,-450);
  } else { 
    alp -= 5;
    stageBgPhase2.resize(1403,992);
    image(stageBgPhase2,-83,-450);

    fill(0,0,0,alp);
    noStroke();
    rect(-123,-450,1403,992);
  }

  if (eyeCount >= 6) { 
    alp2 -= 5;
    stageBgPhase2Ex.resize(1403,992);
    image(stageBgPhase2Ex,-83,-450);
    fill(0,0,0,alp2);
    noStroke();
    rect(-123,-450,1403,992);
  }

  const eyeStartX = -50; // Starting x-coordinate
  const eyeSpacing = 250; // Spacing between eye portals

  for (let i = 0; i < eyeCount && i < 5; i++) {
  const xPos = eyeStartX + (i * eyeSpacing);
  eyePortal.show(xPos, -50);
  }

  cecilia.show();
  ue.show();
  
  // noStroke();
  // rectMode(CENTER);
  // fill(0);
  // rect(width/2,650,windowWidth,230)
 
  if (!cecilia.isOverDrive){
  ceciliaDefaultPortrait();
  }

  if (cecilia.isOverDrive){
    ceciliaOverDrivePortrait();
    }
  
  //Call Status
  statusSpAttackGauge()
  statusHp();
  statusMp();
  statusSp();
  ceciliaName();
  cecilia.preventExceedStatus();

  if(!buttonCreated) {
    skillButton();
    spButton();
    attackButton();
    spAttackButton();
    buttonCreated = true;
  }

  attackText();
  switchText();
  enhancedAttackText();
  overDriveText();

  //function to remove button in previous screen
  var elements = document.getElementsByClassName("hidden3");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  if (cecilia.hp <= 0 || ue.hp <= 0) {
      endingDelay ++;

      if (cecilia.hp <= 0) {
          cecilia.isDead();
          
          AtkButton.attribute("disabled", true);
          SkillButton.attribute("disabled", true);
          SpButton.attribute("disabled", true);
          SpAttackButton.attribute("disabled", true);

          if (endingDelay == 700) {
          currentScreen = "game_over";
        }

      } else if (ue.hp <= 0){
          ue.isDead();

          AtkButton.attribute("disabled", true);
          SkillButton.attribute("disabled", true);
          SpButton.attribute("disabled", true);
          SpAttackButton.attribute("disabled", true);

          if (endingDelay == 700) {
          currentScreen = "ending_1";
        }
          
      }

      

  }
  
  if (eyeCount > eyeMaxCount) {

      endingDelay ++;

      AtkButton.attribute("disabled", true);
      SkillButton.attribute("disabled", true);
      SpButton.attribute("disabled", true);
      SpAttackButton.attribute("disabled", true);
      
      cecilia.isDead();

      if (endingDelay == 700) {
      currentScreen = "ending_2";
      }

  }
    
    if (isPlayerTurn && cecilia.isDeath === false) {

    actionDelay = 0;
    cecilia.isAttacked = false;

    textAlign(CENTER);
    
    if (ue.specialAttackCharge === ue.maxSpecialAttackCharge || ue.specialAttackChargePhase2 === ue.maxSpecialAttackChargePhase2 ){
      fill(254, 190, 0);
      text("< Player's Turn (Foe is Using Strong Attack !)", width / 2, height * 0.7)
    } else {
      fill(211);
      text("< Player's Turn", width / 2, height * 0.7)
    }

    fill(211);
    text("Turn " +turnPassed, width / 2, height * 0.7 + 24);
    
    // Attack Command
    
    AtkButton.removeAttribute('disabled');
    AtkButton.style('background-image', 'url(Assets/Button/Attack-Button.png');

    AtkButton.mousePressed(() => { ue, damageDisplayText = cecilia.attack1(ue); cecilia.overDriveCheckReset(); playerHitEffect.show(width/2,0); isAtkMouseOver = false; cecilia.isAlreadyAction = true;});

    AtkButton.mouseOver(()=> {isAtkMouseOver = true; });
    AtkButton.mouseOut(()=> {isAtkMouseOver = false;  });
    
    if (isAtkMouseOver) {
      showAttackDescription(); // Display the attack description
    } else {
      hideAttackDescription(); // Hide the attack description
    }

    // Switch Command
    
    SkillButton.mousePressed(() => {cecilia.isAssaultMode = !cecilia.isAssaultMode; cecilia.assaultMode(); isSkillMouseOver = false; cecilia.isSwitching = true;});
   
    if (cecilia.isAssaultMode && cecilia.mp < cecilia.assaultModeAttackMpCost) {
      cecilia.isAssaultMode = false;
    }

    if (cecilia.isAssaultMode && cecilia.mp < cecilia.assaultModeAttackMpCost || cecilia.assaultActiveTurn > cecilia.assaultModeMaximumTurn) {
      cecilia.isAssaultMode = false;
    }

    if (cecilia.isAssaultMode || cecilia.isOverDrive || cecilia.mp < cecilia.assaultModeActivateMpCost || cecilia.assaultActiveTurn > cecilia.assaultModeMaximumTurn) {
      SkillButton.attribute('disabled', 'true');
      SkillButton.style('background-image', 'url(Assets/Button/Switch-Mode-Disable.png');
    } else {
      SkillButton.removeAttribute('disabled');
      SkillButton.style('background-image', 'url(Assets/Button/Switch-Mode.png');
    }

    SkillButton.mouseOver(()=> {isSkillMouseOver = true; });
    SkillButton.mouseOut(()=> {isSkillMouseOver = false; });
    
    if (isSkillMouseOver) {
      showSkillDescription();
    } else {
      hideSkillDescription();
    }


    //Overdrive Command
    if (!cecilia.isOverDrive) {
      SpButton.mousePressed(() => {cecilia.isOverDrive = true; cecilia.overDrive(); cecilia.overDriveCheckActivate(); cecilia.isAssaultMode = false; isOverDriveButtonMouseOver = false; cecilia.isSwitching = true;});
     
    }
    
    if (cecilia.isOverDrive) {
      SpButton.mousePressed(() => {cecilia.isOverDrive = false; cecilia.overDriveCheckActivate(); isOverDriveButtonMouseOver = false; cecilia.overDriveAttackCost = cecilia.overDriveAttackMinCost; });

    }

    if (cecilia.isOverDrive && cecilia.sp < cecilia.overDriveActivateCost) {
      cecilia.isOverDrive = false;
      cecilia.overLoaded();
    }

    if (cecilia.isAssaultMode || !cecilia.isOverDrive && cecilia.sp < cecilia.overDriveMinActivateCost || cecilia.isChangedToOverDrive === true || cecilia.isOverLoaded) {
      SpButton.attribute('disabled', 'true');
      SpButton.style('background-image', 'url(Assets/Button/Overdrive-Button-Disable.png');
    } else {
      SpButton.removeAttribute('disabled');
      SpButton.style('background-image', 'url(Assets/Button/Overdrive-Button.png');
    }

    SpButton.mouseOver(()=> {isOverDriveButtonMouseOver = true; });
    SpButton.mouseOut(()=> {isOverDriveButtonMouseOver = false; });

    if (isOverDriveButtonMouseOver) {
      showOverDriveDescription(); 
    } else {
      hideOverDriveDescription(); 
    }

    //Sp Attack Command
    SpAttackButton.mousePressed(() => { ue = cecilia.attack2(ue); cecilia.isAlreadyAction = true; if(cecilia.isOverDrive) {cecilia.overDriveCheckReset();}; isSpAtkMouseOver = false; cecilia.isChargeAttacking = true;});
    
    if(cecilia.isOverLoaded || cecilia.gauge !== cecilia.maxgauge){
      SpAttackButton.attribute('disabled', 'true');
      SpAttackButton.style('background-image', 'url(Assets/Button/Attack-Button-Burst-Disable.png');
    }else{
      SpAttackButton.removeAttribute('disabled');
      SpAttackButton.style('background-image', 'url(Assets/Button/Attack-Button-Burst.png');
    }

    SpAttackButton.mouseOver(()=> {isSpAtkMouseOver = true; });
    SpAttackButton.mouseOut(()=> {isSpAtkMouseOver = false; });
    
    if (isSpAtkMouseOver) {
      showSpecialAttackDescription();
    } else {
      hideSpecialAttackDescription(); 
    }

    if (cecilia.isAlreadyAction) {
      playerActioDelay ++;

    }

    if (playerActioDelay == 100) {
      isPlayerTurn = false;
      cecilia.damageDealt = cecilia.minDamageDealt
      cecilia.isAttacking = false;
      cecilia.isSwitching = false;
      cecilia.isChargeAttacking = false;

    }

    if (cecilia.hp <= cecilia.maxhp * 0.3) {
      cecilia.isHeavyDamaged = true; 
      } else {
        cecilia.isHeavyDamaged = false;
      }

    memoryblade.update();
    cecilia.update();
    overflowblade.update();

  }


  if (!isPlayerTurn && ue.isDeath === false) {

    cecilia.isAlreadyAction = false;
    playerActioDelay = 0;
    actionDelay ++;
    cecilia.update();

    textAlign(CENTER);
    fill(203, 195, 227)
    text("Enemy's Turn >", width / 2, height * 0.7)
    fill(211);
    text("Turn " +turnPassed, width / 2, height * 0.7 + 24);
    
    //disable buttom in enemy's turn
    AtkButton.attribute("disabled", true);
    SkillButton.attribute("disabled", true);
    SpButton.attribute("disabled", true);
    SpAttackButton.attribute("disabled", true);

    if (actionDelay == 50 && ue.hp > ue.maxhp * 0.5 ) {
      ue.attack1(cecilia);}
  
      if (actionDelay == 50 && ue.hp <= ue.maxhp * 0.5) {
        ue.attack2(cecilia);}

        if (actionDelay == 150) {
          ue.isAttacking = false; ue.isCasting = false;
        }

        if (actionDelay == 200 && ue.hp < ue.maxhp * 0.3 ) {
          ue.summonEye(); }
      
    if (actionDelay == 300) {
        isPlayerTurn = true; ue.isSummoning = false; turnPassed +=1;}
      }

}



function drawEnding1() {
  
  background(10);
  ending1();

  //remove button in previous screen
  var elements = document.getElementsByClassName("hidden2");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  
  returnToTitle();
  
}

function drawEnding2() {
  
  background(10);
  ending2();
  
  returnToTitle();
  retry();

  //remove button in previous screen
  var elements = document.getElementsByClassName("hidden2");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  
}

function drawEnding3() {
  
  background(10);
  
}

function gameOver() {
  
  gameoverscreen();
  
  returnToTitle();
  retry();

  //remove button in previous screen
  var elements = document.getElementsByClassName("hidden2");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

}

function returnToTitle () {
  
  returnButton = createButton('Back To Title');
  returnButton.addClass ('hidden3');
  returnButton.position(0, 0);
  returnButton.size(200,50);
  returnButton.style('background-color', 'transparent');
  returnButton.style('border', 'none');
  returnButton.style('font-size', '24px');
  returnButton.style('color', 'white');
  returnButton.style('font-family', 'Novecento light');
  returnButton.style('position', 'absolute');
  returnButton.style('left', '50%');
  returnButton.style('top', '80%');
  returnButton.style('transform', 'translate(-50%, -50%)');
  
  returnButton.mousePressed(() => {
    currentScreen = "menu";
    
  });
    
}

function retry () {
  
  retryButton = createButton('Retry');
  retryButton.addClass ('hidden3');
  retryButton.position(0, 0);
  retryButton.size(200,50);
  retryButton.style('background-color', 'transparent');
  retryButton.style('border', 'none');
  retryButton.style('font-size', '24px');
  retryButton.style('color', 'white');
  retryButton.style('font-family', 'Novecento light');
  retryButton.style('position', 'absolute');
  retryButton.style('left', '50%');
  retryButton.style('top', '70%');
  retryButton.style('transform', 'translate(-50%, -50%)');
  
  retryButton.mousePressed(() => {
    currentScreen = "gameplay";
   
  });

}
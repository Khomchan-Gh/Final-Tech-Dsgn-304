//Attack button

function attackButton(){
    
    AtkButton = createButton('');
    AtkButton.addClass('hidden2');
    AtkButton.position(0, 0);
    AtkButton.size(150,150);
    AtkButton.style('background-image', 'url(Assets/Button/Attack-Button.png');
    AtkButton.style('background-color', 'transparent');
    AtkButton.style('border', 'none');
    AtkButton.style('position', 'absolute');
    AtkButton.style('left', '85%');
    AtkButton.style('top', '87%');
    AtkButton.style('transform', 'translate(-50%, -50%)');

  }

  function attackText(){

    textAlign(CENTER);
    fill(211);
    textFont(novecentoNormal);
    textSize(16);
    text('Basic Attack',AtkButton.position().x, AtkButton.position().y * 1.15);
  
  }

  function showAttackDescription(){

    AtkButton.style('background-image', 'url(Assets/Button/Attack-Button-Over-Animation.gif');

    textAlign(LEFT);
    fill(255);
    textFont(novecentoBold);
    textSize(18);
    if(!cecilia.isAssaultMode && !cecilia.isOverDrive) {
    text('Quick Slash',width * 0.43, height * 0.8 + 32);

    } else if (cecilia.isAssaultMode) {
      text('Memory Blade',width * 0.43, height * 0.8 + 32);

      } else if (cecilia.isOverDrive) {
        fill(106,235,254);
        text('Memory Blade EX',width * 0.43, height * 0.8 + 32);

      }

    
    textAlign(LEFT);
    fill(255);
    textFont(novecentoNormal);
    textSize(16);
    if(!cecilia.isAssaultMode && !cecilia.isOverDrive && !cecilia.isOverLoaded) {
    text('Deal ' + cecilia.minNormalAttackDMG + ' - ' + cecilia.maxNormalAttackDMG +' Damage to A Single Enemy.',width * 0.43, height * 0.8 + 56);

      } else if (cecilia.isAssaultMode) {
        text('Deal ' + cecilia.minAssaultDMG + ' - ' + cecilia.maxAssaultDMG +' Damage to A Single Enemy.',width * 0.43, height * 0.8 + 56);

      } else if (cecilia.isOverDrive) {
        text('Deal ' + cecilia.minOverDriveDMG + ' - ' + cecilia.maxOverDriveDMG +' Damage to A Single Enemy.',width * 0.43, height * 0.8 + 56);
    
      }

  }

  function hideAttackDescription(){
    textAlign(LEFT)
    fill(211)
    textFont(novecentoNormal);
    textSize(16);
    text('',width / 2,height / 2);
  }
  

function skillButton(){
    
    SkillButton = createButton('');
    SkillButton.addClass('hidden2');
    SkillButton.position(0, 0);
    SkillButton.size(75,75);
    SkillButton.style('background-color', 'transparent');
    SkillButton.style('background-image', 'url(Assets/Button/Switch-Mode.png');
    SkillButton.style('border', 'none');
    SkillButton.style('position', 'absolute');
    SkillButton.style('left', '38%');
    SkillButton.style('top', '91%');
    SkillButton.style('transform', 'translate(-50%, -50%)');

  }

  function switchText(){

    textAlign(CENTER);
    fill(211);
    textFont(novecentoNormal);
    textSize(14);
    text('Boost',SkillButton.position().x, SkillButton.position().y * 1.09);
  
  }

  function showSkillDescription(){

    SkillButton.style('background-image', 'url(Assets/Button/Switch-Mode-Over-Animation.gif');

    textAlign(LEFT);
    fill(254, 190, 0);
    textFont(novecentoBold);
    textSize(18);
    text('Memory Discharge',width * 0.43, height * 0.8 + 32);
    
    textAlign(LEFT);
    fill(255);
    textFont(novecentoNormal);
    textSize(10);
    text("Increase DMG and Memory Gauge Gain." ,width * 0.43, height * 0.8 + 56);
    text("Recovery HP upon Attack." ,width * 0.43, height * 0.8 + 56 + 20);
    text("Energy will be Decreased Every Turn. If Energy" ,width * 0.43, height * 0.8 + 56 + 40);
    text("is lower than " + cecilia.assaultModeActivateMpCost + ", Buff will be Removed." ,width * 0.43, height * 0.8 + 56 + 60);
    text("(Can be Activated at Maximum of 5 Turns)." ,width * 0.43, height * 0.8 + 56 + 80);
  };

  function hideSkillDescription(){
    textAlign(LEFT)
    fill(211)
    textFont(novecentoNormal);
    textSize(16);
    text('',width / 2,height / 2);
  }
  
function spButton(){
    
    SpButton = createButton('');
    SpButton.addClass('hidden2');
    SpButton.position(0, 0);
    SpButton.size(150,150);
    SpButton.style('background-color', 'transparent');
    SpButton.style('background-image', 'url(Assets/Button/Overdrive-Button.png');
    SpButton.style('border', 'none');
    SpButton.style('position', 'absolute');
    SpButton.style('left', '28%');
    SpButton.style('top', '87%');
    SpButton.style('transform', 'translate(-50%, -50%)');
    
  }

  function overDriveText(){

    textAlign(CENTER);
    fill(211);
    textFont(novecentoNormal);
    textSize(16);
    text('Burst',SpButton.position().x, SpButton.position().y * 1.15);
  
  }

  function showOverDriveDescription(){

    SpButton.style('background-image', 'url(Assets/Button/Overdrive-Button-Over-Animation.gif');

    textAlign(LEFT);
    fill(106,235,254);
    textFont(novecentoBold);
    textSize(18);
    text('Memory Overflow',width * 0.43, height * 0.8 + 32);

    textAlign(LEFT);
    fill(255);
    textFont(novecentoNormal);
    textSize(10);
    text("Use Memory Gauge to Enter 'Overdrive' State, Greatly" ,width * 0.43, height * 0.8 + 56);
    text("Increase Cecilia's All Offensive Status. In 'Overdrive' State," ,width * 0.43, height * 0.8 + 56 + 20);
    text("Memory Gauge will be Decreased Every Turn. If Memory " ,width * 0.43, height * 0.8 + 56 + 40);
    text("Gauge is lower than " + cecilia.overDriveActivateCost + ", 'Overdrive' state will be removed" ,width * 0.43, height * 0.8 + 56 + 60);
    text("and Cecilia will be 'Overloaded' (Action Can be Cancelled)" ,width * 0.43, height * 0.8 + 56 + 80);
  };

  function hideOverDriveDescription(){
    textAlign(LEFT)
    fill(211)
    textFont(novecentoNormal);
    textSize(16);
    text('',width / 2,height / 2);
  }

function spAttackButton(){
    
    SpAttackButton = createButton('');
    SpAttackButton.addClass('hidden2');
    SpAttackButton.position(0, 0);
    SpAttackButton.size(75,75);
    SpAttackButton.style('background-color', 'transparent');
    SpAttackButton.style('background-image', 'url(Assets/Button/Attack-Button-Burst-Disable.png');
    SpAttackButton.style('border', 'none');
    SpAttackButton.style('position', 'absolute');
    SpAttackButton.style('left', '73.5%');
    SpAttackButton.style('top', '91%');
    SpAttackButton.style('transform', 'translate(-50%, -50%)');
    
  }

  function enhancedAttackText(){

    textAlign(CENTER);
    fill(211);
    textFont(novecentoNormal);
    textSize(14);
    text('Special',SpAttackButton.position().x, SpAttackButton.position().y * 1.09);
  
  }

  function showSpecialAttackDescription(){

    textAlign(LEFT);
    fill(106,235,254);
    textFont(novecentoBold);
    textSize(18);
    if(!cecilia.isAssaultMode && !cecilia.isOverDrive) {
    text('Energized Thrust',width * 0.43, height * 0.8 + 32);

    } else if (cecilia.isAssaultMode) {
      text('Memory Burst',width * 0.43, height * 0.8 + 32);

      } else if (cecilia.isOverDrive) {
        text('Memory Brust EX',width * 0.43, height * 0.8 + 32);

      }

    
    textAlign(LEFT);
    fill(255);
    textFont(novecentoNormal);
    textSize(16);
    if(!cecilia.isAssaultMode && !cecilia.isOverDrive && !cecilia.isOverLoaded) {
    text('Deal 500% DMG to A Single Enemy.',width * 0.43, height * 0.8 + 56);

      } else if (cecilia.isAssaultMode) {
        text('Deal 700% DMG to A Single Enemy.',width * 0.43, height * 0.8 + 56);

      } else if (cecilia.isOverDrive) {
        text('Deal 1000% DMG to A Single Enemy.',width * 0.43, height * 0.8 + 56);
        text('Gain 30% Charge Gauge.',width * 0.43, height * 0.8 + 76)
    
      }
    
      SpAttackButton.style('background-image', 'url(Assets/Button/Attack-Button-Burst-Over-Animation.gif');

  };

  function hideSpecialAttackDescription(){
    textAlign(LEFT)
    fill(211)
    textFont(novecentoNormal);
    textSize(16);
    text('',width / 2,height / 2);

  }
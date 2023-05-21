function playButton(){
  
    playButton1 = createButton('Start');
    playButton1.addClass('hidden1');
    playButton1.position(0, 0);
    playButton1.size(200,50);
    playButton1.style('color', 'black');
    playButton1.style('background-color', 'transparent');
    playButton1.style('border', 'none');
    playButton1.style('font-size', '48px');
    playButton1.style('font-family', 'Novecento Normal');
    playButton1.style('position', 'absolute');
    playButton1.style('left', '20%');
    playButton1.style('top', '50%');
    playButton1.style('transform', 'translate(-50%, -50%)');
    playButton1.mouseOver(hovered);
    playButton1.mouseOut(unHovered);
    playButton1.mousePressed(() => {
      playButton1.hide();
      fadeOutScreen(() => {
      currentScreen = "intro";
      fadeInScreen();

    });

  });

  };


  function hovered(){
    playButton1.style('color', 'white');

  };

  function unHovered(){
    playButton1.style('color', 'black');

  };

  function galleryButton(){
  
    playButton2 = createButton('Gallery');
    playButton2.addClass('hidden1');
    playButton2.position(0, 0);
    playButton2.size(200,44);
    playButton2.style('color', 'black');
    playButton2.style('background-color', 'transparent');
    playButton2.style('border', 'none');
    playButton2.style('font-size', '44px');
    playButton2.style('font-family', 'Novecento Normal');
    playButton2.style('position', 'absolute');
    playButton2.style('left', '20%');
    playButton2.style('top', '60%');
    playButton2.style('transform', 'translate(-50%, -50%)');
    playButton2.mouseOver(galleryHovered);
    playButton2.mouseOut(galleryUnHovered);
    // playButton2.mousePressed(() => {
    //   playButton2.hide();
    //   fadeOutScreen(() => {
    //   fadeInScreen();

    // });

  // });

  };


  function galleryHovered(){
    playButton2.style('color', 'white');

  };

  function galleryUnHovered(){
    playButton2.style('color', 'black');
    
  };

  function creditsButton(){
  
    playButton3 = createButton('Credits');
    playButton3.addClass('hidden1');
    playButton3.position(0, 0);
    playButton3.size(200,44);
    playButton3.style('color', 'black');
    playButton3.style('background-color', 'transparent');
    playButton3.style('border', 'none');
    playButton3.style('font-size', '44px');
    playButton3.style('font-family', 'Novecento Normal');
    playButton3.style('position', 'absolute');
    playButton3.style('left', '20%');
    playButton3.style('top', '70%');
    playButton3.style('transform', 'translate(-50%, -50%)');
    playButton3.mouseOver(creditsHovered);
    playButton3.mouseOut(creditsUnHovered);
    // playButton3.mousePressed(() => {
    //   playButton3.hide();
    //   fadeOutScreen(() => {
    //   fadeInScreen();

    // });

  // });

  };


  function creditsHovered(){
    playButton3.style('color', 'white');

  };

  function creditsUnHovered(){
    playButton3.style('color', 'black');
    
  };

let currentText = 0;
let totalTexts = 3;
let texts = ["Hello, my name is Cecilia and this is a prototype of the game ", "This   should be a tutorial in the future of this work", "Let's get to the gameplay for now"];

function intro() {

image(ceciliaProtrait, width * 0.02, height * 0.02, 619, 877);

noStroke();
rectMode(CENTER);
fill(120,120,120,95);
rect(width/2,550,1200,250);

textAlign(LEFT);
textSize(24);
textLeading(40);
fill(255);
textFont(novecentoNormal)
text(texts[currentText], 60, 470);

nextButton = createButton('Next >');
nextButton.addClass('hiddenI');
nextButton.position(0, 0);
nextButton.size(200,50);
nextButton.style('color', color(211));
nextButton.style('background-color', 'transparent');
nextButton.style('border', 'none');
nextButton.style('font-size', '24px');
nextButton.style('font-family', 'Novecento Normal');
nextButton.style('position', 'absolute');
nextButton.style('left', '45%');
nextButton.style('top', '90%');
nextButton.style('transform', 'translate(-50%, -50%)');
nextButton.mouseOver(nextHovered);
nextButton.mouseOut(nextUnHovered);
nextButton.mousePressed(() => { 
    if (currentText < totalTexts -1){
    currentText++;
        }else{ 
        nextButton.style.display = "none";
        fadeOutScreen(() => {
          currentScreen = "gameplay";
          fadeInScreen();
        currentText = 0; 
     });

}
}); 

skipButton = createButton('Skip >>');
skipButton.addClass('hiddenI');
skipButton.position(0, 0);
skipButton.size(200,50);
skipButton.style('color', color(211));
skipButton.style('background-color', 'transparent');
skipButton.style('border', 'none');
skipButton.style('font-size', '24px');
skipButton.style('font-family', 'Novecento Normal');
skipButton.style('position', 'absolute');
skipButton.style('left', '55%');
skipButton.style('top', '90%');
skipButton.style('transform', 'translate(-50%, -50%)');
skipButton.mouseOver(skipHovered);
skipButton.mouseOut(skipUnHovered);
skipButton.mousePressed(() => { 
    
        fadeOutScreen(() => {
          currentScreen = "gameplay";
          fadeInScreen();
        currentText = 0; 
     });

}
); 

}

function nextHovered(){
  nextButton.style('color', 'white');

};

function nextUnHovered(){
  nextButton.style('color', 'black');

};

function skipHovered(){
  skipButton.style('color', 'white');

};

function skipUnHovered(){
  skipButton.style('color', 'black');

};
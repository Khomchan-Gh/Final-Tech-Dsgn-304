let alpha = 0;

function fadeOutScreen(callback) {

  // Gradually increase the alpha value
  alpha += 15;
  // Draw a semi-transparent black rectangle over the screen
  fill(0, 0, 0, alpha);
  rect(0, 0, width*10, height*10);
  // If the alpha value is less than 255, call this function again in the next frame
  if (alpha < 255) {
    requestAnimationFrame(() => fadeOutScreen(callback));
  } else {
    // If the alpha value reaches 255, call the callback function
    alpha = 0;
    callback();
  }
}

function fadeInScreen() {
  // Gradually decrease the alpha value
  alpha -= 15;
  // Draw a semi-transparent black rectangle over the screen
  fill(0, 0, 0, alpha);
  rect(0, 0, width*10, height*10);
  // If the alpha value is greater than 0, call this function again in the next frame
  if (alpha > 0) {
    requestAnimationFrame(fadeInScreen);
  }
}
function setup() {
    createCanvas(500, 500);
      background(" #A4CEFF");
  
  }
  
  function draw() {
  
    stroke("#A4CEFF");
    fill("rgb(253,214,214)");
  
    // console.log (mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 40, 50);
    }
  }
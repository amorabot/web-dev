const canvasID = 'perlin-background';
const parentID = 'perlin-sketch-container';

// console.log('call')


let perlinSketch = function(p5){
  let w = 10;
  let rez = 0.001;
  let amount = 700;

  p5.windowResized = function(){
    let canvasContainer = document.getElementById(parentID);
    const dimentions = canvasContainer.getBoundingClientRect()
    // p5.resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    p5.resizeCanvas(dimentions.width-11, dimentions.height);
  }

  p5.mouseClicked = function (){
    p5.noLoop();
  }

  p5.setup = function() {
    let canvasContainer = document.getElementById(parentID);
    const dimentions = canvasContainer.getBoundingClientRect()

    cnv = p5.createCanvas(dimentions.width-11, dimentions.height);
    // cnv = p5.createCanvas((p5.windowWidth * 0.4) - 11, p5.windowHeight * 0.8);
    cnv.id(canvasID);
    // const sketchCanvas = document.getElementById("defaultCanvas0");
    p5.frameRate(24);
  }

  p5.draw = function() {
    p5.noStroke()
    p5.background(255);
    let dotColor = p5.color(81, 99, 0);

    p5.angleMode(p5.DEGREES);
    var Xtranslation = p5.sin(p5.frameCount) * 100;
    // const Xtranslation = (p5.mouseX/p5.width);
    // const Ytranslation = (p5.mouseY/p5.height);
  
    p5.push();
    // p5.translate(Xtranslation*300,Ytranslation*100);
    p5.translate(Xtranslation,0);
    p5.makeDistortedDots(amount, dotColor, rez) 
    p5.pop();
  
  }

  p5.makeDistortedDots = function(amount, color, rez) {

    leeway = 150
    for (i=-leeway; i<p5.width+leeway; i+=w) {
      for (j=-leeway; j<p5.height+leeway; j+=w) { // j+=w for dots, j+=1 for line
        p5.stroke(color);
        p5.strokeWeight(2);
        const pointX = i+(p5.noise(i * rez, j * rez) * amount)-(amount/2) +(p5.noise(i * rez, j * rez) * amount)-(amount/2);
        const pointY = j+(p5.noise(i * rez, j * rez) * amount)-(amount/2) +(p5.noise(i * rez, j * rez) * amount)-(amount/2);
      //   if (pointX < 0 || pointX > width){continue;};
      //   if (pointY < 0 || pointX > height){continue;};
        p5.point(
          pointX,
          pointY
        );
      }
    }
  }

}

new p5(perlinSketch, parentID);

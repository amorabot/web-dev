const dvdCanvasID = 'dvd-sketch';
const dvdParentID = 'shader-demo-container';


let dvdSketch = function(p5){
    let width;
    let height;

    let mainCanvas;
    let virtualCanvas;
    let asciiShader;

    let posX = 200;
    let posY = 150;

    let velX = 5;
    let velY = 2;

    let dvdHue = 330;
    let dvdSat = 90;
    let t = 0;

    p5.preload = function(){
        console.log("loading shader")
        asciiShader = p5.loadShader(
            "/scripts/shaderDemo/shader.vert",
            "/scripts/shaderDemo/ascii.frag",
            (loadedShader)=>{
                console.log("Loaded p5.js shaders")
            },
            (error)=>{
                alert(error)
            }
        );
        let canvasContainer = document.getElementById(dvdParentID);
        const dimentions = canvasContainer.getBoundingClientRect()
        width = dimentions.width;
        height = dimentions.height;
    }

    p5.windowResized = function(){
        let canvasContainer = document.getElementById(dvdParentID);
        const dimentions = canvasContainer.getBoundingClientRect()
        width=dimentions.width;
        height=dimentions.height
        p5.resizeCanvas(width, height);
        virtualCanvas.resizeCanvas(width,height);
        asciiShader.setUniform('simulationSample', virtualCanvas);
        asciiShader.setUniform('iResolution', [width, height]);
      }


    p5.setup = function() {
        // console.log(asciiShader.vertexShader);
        // console.log(width,height, dvdCanvasID)
        mainCanvas = p5.createCanvas(width, height, p5.WEBGL);
        mainCanvas.id(dvdCanvasID);
        
        virtualCanvas = p5.createGraphics(width, height);
        virtualCanvas.strokeWeight(10);
        virtualCanvas.frameRate(24);

        p5.shader(asciiShader);
        p5.frameRate(24);
    }

    p5.draw = function() {
        const bgValue = p5.color(70);
        virtualCanvas.background(bgValue);

        virtualCanvas.ellipseMode(p5.CENTER);

        const extents = [120,80];
        var bbminX = posX-(extents[0]/2);
        var bbminY = posY-20-(extents[1]/2);
        var BBmin = [bbminX,bbminY];

        p5.colorMode(p5.HSL, 360, 100, 255);
        const currentColor = p5.color(dvdHue, dvdSat, 180);

        virtualCanvas.stroke(currentColor);
        p5.colorMode(p5.RGB, 255);

        drawDVD(virtualCanvas, posX, posY, currentColor, bgValue);
        testDVDCollision(BBmin, extents);


        drawScreen();
    }
    function drawScreen() {
        asciiShader.setUniform('simulationSample', virtualCanvas);
        asciiShader.setUniform('iResolution', [width, height]);
        
        p5.rect(-width/2, -height/2, width, height);
    }
    function drawDVD(canvas, centerX, centerY, dvdColor, bgColor){
        canvas.fill(dvdColor);
        canvas.ellipse(centerX,centerY,120,30);
        
        canvas.fill(bgColor);
        canvas.ellipse(centerX,centerY,50,15);
        
        canvas.fill(dvdColor);
        canvas.textAlign(p5.CENTER);
        canvas.textSize(50);
        canvas.text("DVD",centerX, centerY-25);
    }
    function testDVDCollision(bbMinVec, extents){
        if (bbMinVec[0]+extents[0] + velX >= width){
            bbMinVec[0] = width - extents[0];
        }
        if (bbMinVec[0] + velX <= 0){
            bbMinVec[0] = 0;
        }
        
        if (bbMinVec[1]+extents[1] + velY >= height){
            bbMinVec[1] = height - extents[1];
        }
        if (bbMinVec[1] + velY <= 0){
            bbMinVec[1] = 0;
        }
        
        if (bbMinVec[0]+extents[0] == width || bbMinVec[0] == 0){
            t += 0.5;
            dvdHue = (dvdHue + (p5.noise(t)*20)) % 360;
            velX = -velX;
        }
        if (bbMinVec[1]+extents[1] == height || bbMinVec[1] == 0){
            t += 0.8;
            dvdSat = p5.max((dvdSat + (p5.noise(t)*30)) % 100, 90);
            velY = -velY;
        }
        
        posX += velX;
        posY += velY;
    }
}

new p5(dvdSketch, dvdParentID);
function sketch(p) {
  let xPos = p.width / 2
  let yPos = p.height / 2
  let speed = 10

  p.setup = function () {
    p.createCanvas(1600, 800)
    p.strokeWeight(4)
    p.rect(0, 0, p.width, p.height)
  }

  p.draw = function () {
    p.background(105, 105, 105)
    p.ellipse(xPos, yPos, 40)

    if (p.keyIsDown(p.LEFT_ARROW)) {
      xPos -= speed
    }
    if (p.keyIsDown(p.RIGHT_ARROW)) {
      xPos += speed
    }
    if (p.keyIsDown(p.DOWN_ARROW)) {
      yPos += speed
    }
    if (p.keyIsDown(p.UP_ARROW)) {
      yPos -= speed
    }
  }
}

export default sketch

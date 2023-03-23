function sketch(p) {
  let xPos = p.width / 2
  let yPos = p.height / 2
  let speed = [0, 0]
  let acceleration = 0.6

  p.setup = function () {
    p.createCanvas(1600, 800)
    p.strokeWeight(4)
    p.rect(0, 0, p.width, p.height)
  }

  p.draw = function () {
    p.background(105, 105, 105)
    p.ellipse(xPos, yPos, 40)

    //Drag
    speed[0] = speed[0] * 0.95
    speed[1] = speed[1] * 0.95

    //Speed
    xPos += speed[0]
    yPos += speed[1]
    if (p.keyIsDown(p.LEFT_ARROW)) {
      speed[0] -= acceleration
    }
    if (p.keyIsDown(p.RIGHT_ARROW)) {
      speed[0] += acceleration
    }
    if (p.keyIsDown(p.DOWN_ARROW)) {
      speed[1] += acceleration
    }
    if (p.keyIsDown(p.UP_ARROW)) {
      speed[1] -= acceleration
    }
  }
}

export default sketch

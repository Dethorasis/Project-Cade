function sketch(p) {
  p.setup = function () {
    p.createCanvas(1800, 900)
    p.strokeWeight(4)
    p.rect(0, 0, p.width, p.height)
  }

  p.draw = function () {
    p.background(0)

    p.ellipse(p.mouseX, p.mouseY, 30, 30)
  }
}

export default sketch

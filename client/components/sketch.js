import { PreventBacteriaEscaping } from './bacteria'

function sketch(p) {
  let xPos
  let yPos
  let speed = [0, 0]
  let acceleration = 0.6

  // --Set up canvas--
  p.setup = function () {
    p.createCanvas(1600, 800)

    // --Positions the ellipse at the center of the canvas--
    xPos = p.width / 2
    yPos = p.height / 2

    p.strokeWeight(4)
    p.rect(0, 0, p.width, p.height)
  }
  // --Draw canvas (60times per second)--
  p.draw = function () {
    console.log('xPos', xPos, 'yPos', yPos)
    p.background('#287c37')
    p.ellipse(xPos, yPos, 30)

    // --Drag--
    speed[0] = speed[0] * 0.95
    speed[1] = speed[1] * 0.95

    // --Speed--
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

    // --Crude functionality to keep ellipse in the canvas--

    xPos = PreventBacteriaEscaping(xPos, 0, p.width)
    yPos = PreventBacteriaEscaping(yPos, 0, p.height)
  }
}

export default sketch

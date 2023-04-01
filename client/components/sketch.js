import { createDots, preventBacteriaEscaping } from './bacteria'
import {
  leftBacteriaMovement,
  rightBacteriaMovement,
  upBacteriaMovement,
  downBacteriaMovement,
} from './bacteria'

function sketch(p) {
  let xPos
  let yPos
  let speed = [0, 0]
  const acceleration = 0.45
  let radius = 50

  // --Set up canvas--
  p.setup = function () {
    p.createCanvas(1600, 800)

    // --Positions the ellipse at the center of the canvas--
    xPos = p.width / 2
    yPos = p.height / 2

    p.rect(0, 0, p.width, p.height)
  }
  // --Draw canvas (60times per second)--
  p.draw = function () {
    console.log('xPos', xPos, 'yPos', yPos)
    p.background('green')
    p.strokeWeight(4)

    p.fill('beige')
    p.ellipse(xPos, yPos, radius)

    // --Makes it look like the player is moving, and must be called before dots are called--
    // --TODO: Research to see if this is the best functionality for "moving"
    p.translate(p.width / 5 - xPos, p.height / 5 - yPos)

    // -- Creates dots on the canvas
    // -- TODO: FIND A WAY TO MAKE MULTPLE DOTS APPEAR, WITHOUT SPURGING ALL OVER THE PLACE--
    createDots(p)

    // --Drag--
    speed[0] = speed[0] * 0.9
    speed[1] = speed[1] * 0.9

    // --Speed--
    xPos += speed[0]
    yPos += speed[1]

    // -- Functions to control bacteria
    // -- TODO: FIND OUT HOW TO PUT THIS ALL IN ONE FUNCTION, WITHOUT IT BREAKING
    leftBacteriaMovement(p, speed, acceleration)
    rightBacteriaMovement(p, speed, acceleration)
    upBacteriaMovement(p, speed, acceleration)
    downBacteriaMovement(p, speed, acceleration)

    // --Crude functionality to keep bacteria in the canvas--
    // --TODO: CHANGE FROM HARDCODED VALUES TO CANVAS DIMENSIONS
    xPos = preventBacteriaEscaping(xPos, 0, p.width)
    yPos = preventBacteriaEscaping(yPos, 0, p.height)
  }
}

export default sketch

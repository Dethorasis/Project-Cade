//--Stops bacteria from leaving the canvas

export function preventBacteriaEscaping(position, minPos, maxPos) {
  if (position < minPos) {
    position = minPos
  }
  if (position > maxPos) {
    position = maxPos
  }
  return position
}

//--Speed and acceleration functionality--

export function leftBacteriaMovement(p, speed, acceleration) {
  if (p.keyIsDown(p.LEFT_ARROW)) {
    return (speed[0] -= acceleration)
  }
}
export function rightBacteriaMovement(p, speed, acceleration) {
  if (p.keyIsDown(p.RIGHT_ARROW)) {
    return (speed[0] += acceleration)
  }
}
export function upBacteriaMovement(p, speed, acceleration) {
  if (p.keyIsDown(p.UP_ARROW)) {
    return (speed[1] -= acceleration)
  }
}
export function downBacteriaMovement(p, speed, acceleration) {
  if (p.keyIsDown(p.DOWN_ARROW)) {
    return (speed[1] += acceleration)
  }
}

//Creates 5 dots at hard coded positions on the canvas
// --TODO: If condition = true, push dot at random location on screen THEN
// -- set condition = false, if dot is eaten, set to true

export function createDots(p) {
  let dots = []
  for (let i = 0; i < 2; i++) {
    p.fill('orange')
    dots.push(p.ellipse(300, 400, 20))
    dots.push(p.ellipse(1500, 500, 30))
    dots.push(p.ellipse(1200, 230, 30))
    dots.push(p.ellipse(600, 500, 30))
    dots.push(p.ellipse(456, 730, 30))
  }
  return dots
}

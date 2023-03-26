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

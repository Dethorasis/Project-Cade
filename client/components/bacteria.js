export function PreventBacteriaEscaping(position, minPos, maxPos) {
  if (position < minPos) {
    position = minPos
  }
  if (position > maxPos) {
    position = maxPos
  }
  return position
}

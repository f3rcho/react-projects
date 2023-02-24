export function saveGameToStorage ({ newBoard, newTurn }) {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export function resetGameToStorage () {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

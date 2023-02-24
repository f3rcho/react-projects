export function Square ({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleOnClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleOnClick} className={className}>
      {children}
    </div>
  )
}

export function Square({ children, isSelected, updateBoard, index, text = "body" }) {
    let className = `square border-2 border-secondary text-${text} ${isSelected ? "is-selected" : ""}`

    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}

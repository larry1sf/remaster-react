export const resetLS =()=>{
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
}

export const setLS =({board,turn})=>{
    localStorage.setItem("board", JSON.stringify(board))
    localStorage.setItem("turn", turn)
}
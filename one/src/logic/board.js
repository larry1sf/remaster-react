import { WINNER_COMBOS } from "../constantes"
export  const checkWinnerFrom = (boardToCheck) => {
    //revisamo si ahi un ganador
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null // lo retornamos o el null si no
}

export const checkEndGame = (newBoard = []) => {
    return newBoard.every((square) => square !== null)
}
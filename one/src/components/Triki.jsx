import "../css/index-triki.css"

import { TURNS } from "../constantes"
import { Square } from "./Square"

import confetti from "canvas-confetti"
import { useState } from "react"
import { checkWinnerFrom, checkEndGame } from "../logic/board"
import { WinnersModal } from "./WinnersModal"


export function Triki() {
    const [board, setBoard] = useState(Array(9).fill(null))

    const [turn, setTurn] = useState(TURNS.X)

    const [winner, setWinner] = useState(null)//null no ahi ganador y false un empate 



    const resetGame = () => {

        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }



    // el of devuelve cada elemento completo del array 
    // el in devuelve cada indel del elemento del aray


    const updateBoard = (index) => {
        // verifica si existe para retornar nada o continuar funcionando
        if (board[index] || winner) return
        //actualizamos el tablero
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        //cambiamos el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        //actualizar winner
        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {
            setWinner(newWinner)
            confetti()
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }


    }

    return (
        <>
            <main className="board">
                <h1 className="text-body">Triki</h1>
                <button className="text-body border border-2 w-50 border-secondary" onClick={resetGame}>resetear el juego</button>
                <section className="game">
                    {
                        board.map((square, index) => {
                            return (
                                <Square
                                    key={index}
                                    index={index}
                                    updateBoard={updateBoard}
                                >

                                    {square}
                                </Square>
                            )
                        })
                    }
                </section>
                <section className="turn text-body gap-2">
                    <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                    <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
                </section>


                <WinnersModal winner={winner} resetGame={resetGame} />



            </main>
        </>
    )
}


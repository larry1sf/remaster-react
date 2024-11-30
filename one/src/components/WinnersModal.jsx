import { Square } from "./Square"

export function WinnersModal({ winner, resetGame }) {
    if (winner === null) return

    const qrWinnerText = winner === false ? "Empate" : "Ganó:"
    const qrWinnerName = winner && (<header className="win text-white"><Square text="white">{winner}</Square></header>)

    return (
        <section className="winner">

            <div className="text text-body">
                <h2 className="text-white">
                    {qrWinnerText}
                </h2>
                {qrWinnerName}
                <footer>
                    <button className="text-white btn-re" onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}
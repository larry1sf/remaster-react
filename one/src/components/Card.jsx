import { useState } from "react"

export function Card({ title, img, red }) {

    const [isfollow, setIsfollow] = useState(
        () => {
            const data = localStorage.getItem(`state-${title}`)
            return data === "true" ? true : false
        }
    )

    function saveData(value) {
        try {
            let newValue = !value; setIsfollow(newValue)
            localStorage.setItem(`state-${title}`, newValue)
        } catch (ex) { new Error(ex) }
    }

    function toggleFollow() {
        // setIsfollow(initialValue => !initialValue)
        saveData(isfollow)
    }

    const qrClsFollow = isfollow ? "follow" : "no-follow"
    const qrFollow = isfollow ? "Siguiendo" : "Seguir"


    return (
        <>
            <article className="d-flex gap-2 align-items-center justify-content-between px-4 py-2 border border-body-emphasis rounded-4 shadow-lg" style={{ height: 80, width: 460 }}>
                <header className="d-flex align-items-center h-100 text-body" >
                    <img height={45} src={img} alt="" className="me-2" />
                    <div className="px-2">
                        <h2 className="h5">{title}</h2>
                        <span className="fw-normal fs-6 text-center">{red(title)}</span>
                    </div>
                </header>
                <button
                    style={{ width: 142 }}
                    type="button"
                    className={`h-50 px-2 py-0 rounded-4 btn btn-secondary bg-dark-subtle text-dark fw-medium shadow-lg ${qrClsFollow}`}
                    onClick={toggleFollow}
                >
                    <span>{qrFollow}</span>
                    <span className="d-none">Dejar de Seguir</span>
                </button>

            </article>
        </>
    )
}
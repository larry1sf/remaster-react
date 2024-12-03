import { useEffect, useState } from 'react'
import './App.css'

function MauseMove() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log("efecto")
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log(clientX, clientY);
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener("pointermove", handleMove)
    }
    return () => {
      console.log("cleanup");

      window.removeEventListener('pointermove', handleMove)
    } // limpia la funcion
  }, [enabled])


  return (
    <>
      <div style={{
        position: "absolute",
        height: 40,
        width: 40,
        left: -20,
        top: -20,
        pointerEvents: 'none',
        opacity: .8,
        borderRadius: "50%",
        backgroundColor: "#09f",
        transform: `translate(${position.x}px,${position.y}px)`
      }} />
      <div style={{ width: 300, position: 'relative' }}>
        <button type="button" style={{ width: 280, left: 0, position: "absolute" }} onClick={() => { setEnabled(!enabled) }}>
          {enabled ? "Desactivar" : "activar"} Seguida del puntero
        </button>
      </div>
    </>
  )
}
function App() {

  return (
    <>
      <MauseMove />
    </>
  )
}

export default App

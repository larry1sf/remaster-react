import Card from "./components/Card";
import react from "./assets/react.svg"
import vite from "/vite.svg"

import Indice from "./Indice";

import { Triki } from "./components/Triki";





function App() {
    const formatRed = (name) => { return `@${name}` }

    return (
        <>
            <Indice >
                <Card title="Javier" red={formatRed} img={react} ></Card>
                <Card title="Carlo" red={formatRed} img={vite} ></Card>
                <Card title="Martinez lopez" red={formatRed} img={react}></Card>
                <div className="bg-secondary bg-gradient mt-4" style={{ height: 1, width: "80vw" }}></div>
                <Triki />
            </Indice >


        </>
    )
}

export default App
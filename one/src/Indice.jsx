import vite from "/vite.svg"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { useState } from "react";




export default function Indice({ children }) {
    const [theme, setTheme] = useState(() => {
        const themeLocal = localStorage.getItem("theme")
        return themeLocal === "dark" ? "dark" : "light"
    })

    const toggleThemeDark = () => {
        let algThemeDark = (theme) => theme === "light" ? "dark" : "dark"
        setTheme(theme => algThemeDark(theme))
        localStorage.setItem("theme", algThemeDark(theme))
    }

    const toggleThemeLight = () => {
        let AlgThemeLight = (theme) => theme === "dark" ? "light" : "light"
        setTheme(theme => AlgThemeLight(theme))
        localStorage.setItem("theme", AlgThemeLight(theme))
    }

    return (
        <>
            <div
                style={{ minHeight: "100vh" }}
                data-bs-theme={theme}
                className="bg-body"
            >
                <header
                    style={{ height: "10vh" }}
                >
                    <Navbar className="h-100">
                        <Container className="d-flex justify-content-between">
                            <Navbar.Brand href="#home">
                                <img
                                    src={vite}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse
                                id="navbar-dark-example"
                                style={{ flexGrow: 0 }}>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Temas 🎨"
                                        className="fw-medium"
                                        menuVariant={theme}
                                    >
                                        <NavDropdown.Item onClick={toggleThemeDark}>Recomendado</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={toggleThemeLight}>Claro </NavDropdown.Item>
                                        <NavDropdown.Item onClick={toggleThemeDark}>Oscuro</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header >
                <div
                    className="d-flex mt-4 flex-column align-items-center gap-3"
                    style={{ minHeight: "auto" }}>
                    {children}
                </div>
            </div>
        </>
    )
}

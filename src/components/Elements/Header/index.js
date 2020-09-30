import React, { useState } from "react"
import { Link } from "gatsby"
import "./Header.scss"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../../../Images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars , faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className="Header__menu">
        <Container>
          <header>
            <div className="logo__div">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <nav className={active ? "nav active" : "nav"}>
              <ul>
                <li>
                  <Link to="/" onClick={() => setActive(!active)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" onClick={() => setActive(!active)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Portfolio" onClick={() => setActive(!active)}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/Carrer" onClick={() => setActive(!active)}>
                    Carrer
                  </Link>
                </li>
                <li>
                  <Link to="/Blog" onClick={() => setActive(!active)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" onClick={() => setActive(!active)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <button id="menuToggle" onClick={() => setActive(!active)}>
              {active ? (
                <FontAwesomeIcon icon={faTimes} size="1x" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="1x" />
              )}
            </button>
          </header>
        </Container>
      </div>
    </>
  )
}

export default Header

import React from "react"
import { Linkedin, Github, Mail, Menu } from "grommet-icons"
import "../styles/global.css"

const Navbar = ({ setShowMenu, showMenu }) => {
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="top-nav">
      <div className={showMenu ? "hide-icons" : "show-icons"}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kaylynndiazschott/">
              <Linkedin color="#cbdfbd" />
            </a>
          </li>
          <li>
            <a href="https://github.com/lynnkays">
              <Github color="#cbdfbd" />
            </a>
          </li>
          <li>
            <a href="mailto:kdiazs1215@gmail.com">
              <Mail color="#cbdfbd" />
            </a>
          </li>
          <li>
            <Menu
              className="hamburger"
              onClick={handleMenu}
              size="40vh 40vw"
              color="#cbdfbd"
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import React from "react"
import { Close } from "grommet-icons"
const SideMenu = ({ showMenu, setShowMenu }) => {
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className={showMenu ? "side-menu expanded" : "side-menu"}>
      <ul>
        <li className="close-button">
          <Close onClick={handleMenu} size="large" color="#F6F4D2" />
        </li>
        <li>
          <a href="#about" onClick={handleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={handleMenu}>
            Experience
          </a>
        </li>
        <li>
          <a href="#project" onClick={handleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu

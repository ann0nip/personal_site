import React from "react"
import {
  Nav,
  NavContent,
  NavContentLogo,
  NavContentMenuList,
  NavContentMenuItem,
} from "../Styles/Styles"

export default function Header() {
  return (
    <Nav>
      <NavContent>
        <NavContentLogo> {"/>"} </NavContentLogo>
        <NavContentMenuList>
          <NavContentMenuItem>
            <a href="/">Home</a>
          </NavContentMenuItem>
          <NavContentMenuItem>
            <a href="#">Blog</a>
          </NavContentMenuItem>
        </NavContentMenuList>
      </NavContent>
    </Nav>
  )
}

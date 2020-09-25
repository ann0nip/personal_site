import React from "react"
import { Link } from "gatsby"
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
            <Link to="/">Home</Link>
          </NavContentMenuItem>
          <NavContentMenuItem>
            <Link to="/links">Referral Links </Link>
          </NavContentMenuItem>
        </NavContentMenuList>
      </NavContent>
    </Nav>
  )
}

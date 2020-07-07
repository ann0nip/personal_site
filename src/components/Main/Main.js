import React from "react"
import Details from "../Details/Details"
import { MainContent, BlinkingCoursor } from "../Styles/Styles"
import { Icon } from "@iconify/react"
import twitterIcon from "@iconify/icons-simple-icons/twitter"
import instagramIcon from "@iconify/icons-simple-icons/instagram"
import linkedinIcon from "@iconify/icons-simple-icons/linkedin"
import githubIcon from "@iconify/icons-simple-icons/github"

export default function Main() {
  return (
    <MainContent>
      <span className="intro">Hello! I'm</span>
      <h1 className="name">Juan Martín Giménez</h1>
      <br></br>
      <h2>
        {">"} Frontend Engineer
        <BlinkingCoursor>&nbsp;</BlinkingCoursor>
      </h2>
      <a
        className="twitter"
        href="https://www.twitter.com/ann0nip"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={twitterIcon} />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/ann0nip"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={instagramIcon} />
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/ann0nip"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={linkedinIcon} />
      </a>
      <a
        className="github"
        href="https://www.github.com/ann0nip"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={githubIcon} />
      </a>
      <hr />
      <Details />
    </MainContent>
  )
}

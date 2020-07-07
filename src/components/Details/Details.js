import React from "react"
import { BiographyContainer, Biography, BiographyImg } from "../Styles/Styles"
import profile from "../../../static/profile.jpg"
export default function Details() {
  return (
    <BiographyContainer>
      <Biography>
        I'm a programmer who lives in Córdoba, Argentina. I'm a curious guy that
        is focused on JavaScript, specifically in React and its environment.
        Create cool stuff, travel, and teaching are a few of the activities that
        I enjoy the most. 👨🏻‍💻
      </Biography>
      <BiographyImg src={profile}></BiographyImg>
    </BiographyContainer>
  )
}

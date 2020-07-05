import React from "react"
import {
  BiographyContainer,
  Biography,
  BiographyImg,
  Story,
} from "../Styles/Styles"
import profile from "../../../static/profile.jpg"
export default function Details() {
  return (
    <BiographyContainer>
      <Biography>
        I'm a 27 years old Frontend Engineer based in Córdoba, Argentina. I'm a
        coding curious that is focused on JavaScript, specifically in React and
        its environment. Interested in creating cool stuff, travel, and
        sometimes teach 👨🏻‍💻
      </Biography>
      <BiographyImg src={profile}></BiographyImg>
    </BiographyContainer>
  )
}

import React from "react"
import { MainContent, BlinkingCoursor } from "../Styles/Styles"

export default function Main() {
  return (
    <MainContent>
      <span className="intro">Hello! I'm</span>
      <h1>Juan Martín Giménez</h1>
      <br></br>
      <h2>
        {">"} Frontend Engineer
        <BlinkingCoursor>&nbsp;</BlinkingCoursor>
      </h2>
    </MainContent>
  )
}

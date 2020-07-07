import React, { useState } from "react"
import { useWindowSize } from "react-use"
import ConfettiGenerator from "confetti-js"
import { Credits } from "../Styles/Styles"
export default function Footer() {
  const { width } = useWindowSize()
  const [start, setStart] = useState(false)
  const [height, setHeight] = useState(0)
  function mouseEnter(e) {
    setStart(true)
    setHeight(document.body.scrollHeight)
  }

  React.useEffect(() => {
    if (start) {
      const confettiSettings = {
        target: "magic",
        max: "300",
        size: "1.5",
        animate: true,
        props: ["circle", "square", "triangle", "line"],
        clock: "29",
        rotate: true,
        width: width,
        height: height,
        start_from_edge: true,
        respawn: false,
      }
      const confetti = new ConfettiGenerator(confettiSettings)
      confetti.render()

      return () => confetti.clear()
    }
  }, [start])
  return (
    <Credits>
      © 2020 @Ann0nip • Crafted with{" "}
      <div onMouseEnter={e => mouseEnter(e)}>
        <span role="img" aria-label="magic">
          🧙🏻‍♂️
        </span>
      </div>{" "}
      and{" "}
      <a href="https://www.gatsbyjs.org/" rel="noreferrer" target="_blank">
        Gatsby
      </a>{" "}
      +{" "}
      <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
        Netlify
      </a>{" "}
      +{" "}
      <a href="https://github.com/" rel="noreferrer" target="_blank">
        GitHub
      </a>
    </Credits>
  )
}

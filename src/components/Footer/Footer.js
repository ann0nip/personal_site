import React, { useState } from "react"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"
import { Credits } from "../Styles/Styles"
export default function Footer() {
  const { width } = useWindowSize()
  const [start, setStart] = useState(false)
  function mouseEnter(e) {
    setStart(true)
  }
  return (
    <Credits>
      <Confetti
        run={start}
        recycle={false}
        pieces="2500"
        confettiSource={{
          w: 10,
          h: 10,
          x: width / 2,
          y: 0,
        }}
      />
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

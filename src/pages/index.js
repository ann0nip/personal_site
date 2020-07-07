import React from "react"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
// import Posts from "../components/Posts/Posts"
import Footer from "../components/Footer/Footer"
import { GlobalStyle, Container } from "../components/Styles/Styles"

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <canvas id="magic" className="magic"></canvas>
        <Main />
        {/* <Posts /> */}
      </Container>
      <Footer />
    </React.Fragment>
  )
}

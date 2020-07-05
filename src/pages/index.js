import React from "react"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Details from "../components/Details/Details"
import Posts from "../components/Posts/Posts"
import Footer from "../components/Footer/Footer"
import { GlobalStyle, Container } from "../components/Styles/Styles"

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <Main />
        <Details />
        <Posts />
        <Footer />
      </Container>
    </React.Fragment>
  )
}

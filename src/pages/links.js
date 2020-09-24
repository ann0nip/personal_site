import React from "react"
import Header from "../components/Header/Header"
import { GlobalStyle, Container, Ul, Li } from "../components/Styles/Styles"

export default function links() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header></Header>
      <Container>
        <Ul>
          <Li>
            <a href="https://www.binance.com/en/register?ref=U0B3Q8J5">
              Registrate gratis en Binance y con 10% de descuento en las
              comisiones de transacciones.
            </a>
          </Li>
          <Li>
            <a href="http://crazy911.com/referrals/?ref=share82E-QQ3&lang=en">
              Crea una cuenta gratuita en un banco suizo [Dukascopy]
            </a>
          </Li>
          <Li>
            <a href="https://brave.com/bjy584">
              {" "}
              Navega ¡más rápido, más seguro y gana dinero! [Brave]
            </a>
          </Li>
          <Li>
            {/* * After your friend signs up and receives a total of 1000.00 USD, you both earn a 25.00 USD reward */}
            <a href="http://share.payoneer.com/nav/FsnFkPs4nERNvfF9uqhjf1Hsk9tOd4PWGFlVcY5Al2JU08hljkkH5VmlO6IADUPXzM8cHB9rWZ7_CsGGE2mzyQ2">
              Registrate gratis en Payoneer y llevate 25 U$D *
            </a>
          </Li>
        </Ul>
      </Container>
    </React.Fragment>
  )
}

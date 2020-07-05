import styled, { createGlobalStyle, keyframes } from "styled-components"
import { devices } from "./MediaQueries"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        font-size: 23px;
        color: #12130f;
        background: #f3e9dc;
    }
`
export const Container = styled.section`
  // display: flex;
  // flex: 1;
  // flex-direction: column;
`

export const Nav = styled.nav`
  border-top: 10px solid #3f84e5;
  display: flex;
  padding: 20px;
  background-color: #fff;
`

export const NavContent = styled.div`
  flex: 1;
  max-width: 1024px;
  display: flex;
  margin: 0 auto;
`

export const NavContentLogo = styled.span`
  height: 50px;
  width: 50px;
  padding: 16px;
  font-family: monospace;
  border-radius: 50%;
  background: #6ba368;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`
export const NavContentMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  flex: 1;
  justify-content: space-around;
  max-width: 100%;
  align-items: center;
`
export const NavContentMenuItem = styled.li`
  cursor: pointer;
  font-weight: 700;
  & a {
    text-decoration: none;
    color: #12130f;
    padding-bottom: 2px;
  }
  & a:hover {
    border-bottom: 3px solid #c83e4d;
  }
`
export const blinking = keyframes`
0%{     opacity: 1   }
50%{     opacity: 0   }
100%{   opacity: 1    }
`

export const MainContent = styled.header`
  padding: 4em;
  text-align: center;
  background-color: #fff;
  max-width: 1024px;
  margin: 25px auto;
  & .intro,
  .name {
    display: inline;
    font-size: 3em;
    margin: 0 10px;
  }
  & .name {
    color: #1d6bd7;
  }
  @media ${devices.mobile} {
    font-size: 0.7em;
    & .intro {
      display: block;
    }
    & .name {
      font-size: 4em;
    }
  }
`
export const BlinkingCoursor = styled.span`
  background-color: #6ba368;
  border: 1px solid #6ba368;
  animation: ${blinking} 1s step-end infinite;
  margin-left: 5px;
`

export const BiographyContainer = styled.div`
  display: flex;
  padding: 10px;
`

export const Biography = styled.p`
  padding: 15px;
`

export const BiographyImg = styled.img``

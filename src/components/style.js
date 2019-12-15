import styled from 'styled-components';

export const Title = styled.h2`
  position: relative;
  top: -50px;
  font-size: 2.5em;
  color: #00A5A8;
  text-align: center;
  margin: auto;
  margin-bottom: -30px;
  min-height: 60px;
  font-family: 'Lato', sans-serif;
`

export const Menu = styled.div`
  position: relative;
  font-size: 1em;
  font-weight: 100;
  ul {
    li {
      padding: 5px;
      text-align: right;
      a {
        color: #008285;
      }
    }
  }
`

export const LogoFederationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 50px 100px;
  font-size: 1.5rem;
  @media only screen and (min-width: 1088px) {
    width: 100%;
  }
`

export const Federations = styled.div`
  display: flex;
  width: 100vw;
  height: 80px;
  position: relative;
  top: 25px;
  left: 20px;
  img {
    margin-right: 5px;
  }
  @media only screen and (min-width: 1088px) {
    justify-content: space-evenly;
    width: 200px;
    left: 0px;
  }
`

export const Image = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  width: 100%;
  max-width: 300px;
  height: 70%;
  min-height: 200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

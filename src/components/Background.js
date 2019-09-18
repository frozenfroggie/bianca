import React from 'react'
import styled from "styled-components"
import classNames from 'classnames'
import { FaChevronUp } from 'react-icons/fa';

import BiancaWallpaper from '../img/biancaWallpaper.jpg'
import BiancaWallpaper2 from '../img/biancaWallpaper2.jpg'
import BiancaWallpaper3 from '../img/biancaWallpaper3.jpg'
import BiancaWallpaper4 from '../img/biancaWallpaper4.jpg'
import BiancaWallpaper5 from '../img/biancaWallpaper5.jpg'

import FederationLogo1 from '../img/federation_logo1.png'
import FederationLogo2 from '../img/federation_logo2.png'
import Logo from '../img/logo.png'

const Dot = styled.div`
  width: 6px;
  height: 6px;
  min-width: ${props => props.active ? '12px' : 'auto'};
  min-height: ${props => props.active ? '12px' : 'auto'};
  background-color: #00A5A8;
  border-radius: 50%;
  margin: 8px;
  transition: all .3s;
  &:hover {
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
`

const DotsContainer = styled.div`
  width: 15px;
  height: auto;
  z-index: 10;
  position: fixed;
  transition: all .3s;
  top: calc(50% + 150px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (min-width: 1088px) {
    top: calc(50% - 30px);
  }
`

const LogoFederationsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100vw;
  @media only screen and (min-width: 1088px) {
    width: 200px;
    left: -80px;
    top: 20%;
  }
`

const Federations = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  position: relative;
  top: 55px;
  left: 20px;
  img {
    margin-right: 5px;
  }
  @media only screen and (min-width: 1088px) {
    justify-content: space-evenly;
    width: 200px;
    top: 105px;
    left: 0px;
  }
`

const TextBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 50vh;
  width: 100%;
  bottom: -50px;
  position: absolute;
  transform: skewY(${props => props.skew}deg);
  @media only screen and (min-width: 1088px) {
    position: absolute;
    height: 100vh;
    top: 0px;
    right: ${props => props.right};
    transform: skew(${props => props.skew}deg);
    width: 45%;
  }
  /* background: radial-gradient(circle at center,hsla(0,0%,98%,.9),transparent 100%); */
`

const TextBackgroundContent = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #008285;
  background-color: transparent;
  position: relative;
  width: 85%;
  left: -10px;
  top: -50px;
  font-size: 1.2em;
  display: flex;
  transform: skewY(${props => props.skew}deg);
  @media only screen and (min-width: 1088px) {
    position: relative;
    font-size: 1.5em;
    left: -50px;
    width: 50%;
    transform: skew(${props => props.skew}deg);
  }
`

function scrollTo(offset, callback) {
    const onScroll = function () {
        const scrollTop = window.scrollTop || window.pageYOffset

        if (scrollTop === offset) {
            window.removeEventListener('scroll', onScroll)
            callback && callback()
        }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    })
}

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundRef = React.createRef();
    this.state = {
      activeDot: 0,
      scrolling: false
    }
  }
  componentDidMount() {
    typeof window !== 'undefined' && window.addEventListener('scroll', (e) => {
      if(this.state.scrolling) {
        return;
      }
      const activeDot = Math.floor(window.scrollY / window.innerHeight);
      if(this.state.activeDot !== activeDot && activeDot <= 5) {
        this.setState({
          activeDot
        })
      }
    })
  }
  activateDot = (activeDot) => {
    this.setState({
      activeDot,
      scrolling: true
    })
    scrollTo(activeDot * window.innerHeight, () => {
      this.setState({
        scrolling: false
      })
    })
  }
  activateNextDot = () => {
    this.setState(prevState => ({
      activeDot: prevState.activeDot + 1,
      scrolling: true
    }));
    scrollTo((this.state.activeDot + 1) * (window.innerHeight + 56), () => {
      this.setState({
        scrolling: false
      })
    })
  }
  render() {
    return (
      <div style={{height: '100%'}} ref={this.backgroundRef}>
        <div className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper
            })`,
            backgroundAttachment: `fixed`
          }}>
          <TextBackground skew="-15" right="-7%">
            <TextBackgroundContent skew="15">
              <LogoFederationsContainer>
                <img src={Logo} width="200" style={{position: 'relative'}}/>
                <Federations>
                  <img src={FederationLogo1} width="60" height="60" />
                  <img src={FederationLogo2} width="60" height="60" />
                </Federations>
              </LogoFederationsContainer>
            </TextBackgroundContent>
          </TextBackground>
        </div>
        <div className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper2
            })`,
            backgroundAttachment: `fixed`
          }}>
          <TextBackground skew="15" right="-7%">
            <TextBackgroundContent skew="-15">
              Nasza historia z wystawami rozpoczęła się 22.10.2017 roku na Międzynarodowej Wystawie Psów Rasowych w Poznaniu gdzie nasza pierwsza suczka DALIA Owieczka Świętokrzyska (FCI) zajęła lok.3/4 w klasie młodzieży.
            </TextBackgroundContent>
          </TextBackground>
        </div>
        <div className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper3
            })`,
            backgroundAttachment: `fixed`
          }}>
            <TextBackground skew="-15" right="-7%">
              <TextBackgroundContent skew="15">
                Kolejna wystawa - XIII Międzynarodowa Wystawa Psów Rasowych w Kielcach 25.11.2017
              </TextBackgroundContent>
            </TextBackground>
        </div>
        <div className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper4
            })`,
            backgroundAttachment: `fixed`
          }}>
            <TextBackground skew="15" right="-7%">
              <TextBackgroundContent skew="-15">
                DALIA rozpoczęła dorosły championat na XXXIX Wiosennej Wystawie Psów Rasowych 06.05.2018 roku w Nowym Dworze Mazowieckim. Sędzia Maria Zasada lok.1/2 NDS,CWC,BOS
              </TextBackgroundContent>
            </TextBackground>
        </div>
        <div className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper5
            })`,
            backgroundAttachment: `fixed`
          }}>
            <TextBackground skew="-15" right="-7%">
              <TextBackgroundContent skew="15">
                Dalia ocena doskonała lok.1 CWC, BOB
              </TextBackgroundContent>
            </TextBackground>
        </div>
        <div>
          <DotsContainer style={this.state.activeDot === 0 || this.state.activeDot === 5 ? {right: '10%'} : {right: '5%'}}>
            <Dot active={this.state.activeDot === 0} onClick={() => this.activateDot(0)}></Dot>
            <Dot active={this.state.activeDot === 1} onClick={() => this.activateDot(1)}></Dot>
            <Dot active={this.state.activeDot === 2} onClick={() => this.activateDot(2)}></Dot>
            <Dot active={this.state.activeDot === 3} onClick={() => this.activateDot(3)}></Dot>
            <Dot active={this.state.activeDot === 4} onClick={() => this.activateDot(4)}></Dot>
            <Dot active={this.state.activeDot === 5} onClick={() => this.activateDot(5)}></Dot>
          </DotsContainer>
          <section id="section03" className="demo" onClick={this.state.activeDot < 5 && this.activateNextDot} style={this.state.activeDot === 5 ? {opacity: 0} : {}}>
            <span></span>
          </section>
          <div
            className={classNames(
              'scroll-to-top',
              {'scroll-to-top-hidden': this.state.activeDot < 5}
            )}
            onClick={() => scrollTo(0)} >
            <FaChevronUp>
            </FaChevronUp>
          </div>
        </div>
      </div>
    )
  }
}

export default Background

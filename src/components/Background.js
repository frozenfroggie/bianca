import React from 'react'
import styled, { keyframes } from "styled-components"
import classNames from 'classnames'
import { FaChevronUp, FaChevronLeft, FaChevronRight, FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt, FaAngleDown, FaAngleUp, FaMoneyCheck, FaFacebookF } from 'react-icons/fa';

import pho from '../img/pho3.jpg'
import pho2 from '../img/pho2.jpg'
import pho3 from '../img/pho4.jpg'
import pho4 from '../img/pho5.jpg'
import BiancaWallpaper from '../img/biancaWallpaper.jpg'
import BiancaWallpaper2 from '../img/biancaWallpaper2.jpg'
import BiancaWallpaper3 from '../img/biancaWallpaper3.jpg'
import BiancaWallpaper4 from '../img/biancaWallpaper4.jpg'
import BiancaWallpaper5 from '../img/biancaWallpaper5.jpg'

import FederationLogo1 from '../img/federation_logo1.png'
import FederationLogo2 from '../img/federation_logo2.png'
import Logo from '../img/logo.png'
import LogoMobile from '../img/logo_mobile.png'

const moveLeft = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const ArrowContainer = styled.div`
  width: auto;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: white;
  &:hover {
    cursor: pointer;
    animation-play-state: paused;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
  }
`

const ArrowContainerLeft = styled(ArrowContainer)`
  animation: ${moveLeft} 1s linear infinite;
`

const ArrowContainerRight = styled(ArrowContainer)`
  animation: ${moveRight} 1s linear infinite;
`

const Row = styled.div`
  display: flex;
`

const Menu = styled.div`
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
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100%;
  padding: 50px 100px;
  @media only screen and (min-width: 1088px) {
    width: 100%;
  }
`

const Federations = styled.div`
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

const TextBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 55vh;
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
    width: 37.5%;
  }
  /* background: radial-gradient(circle at center,hsla(0,0%,98%,.9),transparent 100%); */
`

const TextBackgroundContent = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: space-between;
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
    left: -70px;
    width: 100%;
    top: 0px;
    transform: skew(${props => props.skew}deg);
  }
`

const BannerTitle = styled.h1`
  font-family: Bianca;
  color: rgba(250,250,250,0.5);
  position: relative;
  height: 50%;
  font-size: 4em;
  left: 0%;
  width: 100%;
  margin-left: 15%;
  padding: 10px 0px;
  top: 12%;
  text-align: start;
  @media only screen and (min-width: 1088px) {
    top: 10%;
    right: -5%;
    font-size: 7em;
  }
`

const Container = styled.div`
  background-color: white;
  height: 60%;
  width: 100vw;
  max-width: 100%;
  padding: 50px 0px;
  @media only screen and (min-width: 1088px) {
    margin-left: -40px;
  }
`

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  overflowX: scroll;
  width: 100vw;
  @media only screen and (min-width: 1088px) {
    width: calc(72.6%);
    transform: skewX(-12deg);
  }
`

const ContentColumns = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 60;
  margin-right: 0;
  position: relative;
  @media only screen and (min-width: 1088px) {
    transform: skewX(12deg);
  }
`

const ImageSubscriptionContainer = styled.div`
  padding: 0px 15px;
  margin: 0px 15px;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Subscription = styled.div`
  font-size: 2em;
  text-align: center;
  line-height: 1em;
  margin-top: 15px;
  color: #018ba7;
`

const Image = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  width: 100%;
  height: 70%;
  min-height: 200px;
`

const BackgroundBanner = styled.div`
  @media only screen and (max-width: 1088px) {
    height: 100%;
    background-image: none !important;
    background-color: ${props => props.color} !important;
    margin-bottom: 20px;
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
    this.servicesRef = React.createRef();
    this.state = {
      activeDot: 0,
      scrolling: false,
      isScrollingBlocked: false
    }
  }
  componentDidMount() {
    const item = this.servicesRef.current;
    console.log(item);
    item && item.addEventListener('wheel', (e) => {
      if(this.state.isScrollingBlocked) {
        e.preventDefault();
        e.returnValue = false;
      }
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
    typeof window !== 'undefined' && window.addEventListener('scroll', (e) => this.onScroll(e));
  }
  onScroll = (e) => {
    const activeDot = Math.floor(window.scrollY / window.innerHeight);
    if(this.state.activeDot !== activeDot && activeDot <= 5) {
      this.setState({
        activeDot
      })
    }
  }
  activateDot = (activeDot) => {
    this.setState({
      activeDot,
      scrolling: true
    })
    const ua = navigator.userAgent.toLowerCase();
    const isAndroidMobile = ua.indexOf("android") > -1; // && ua.indexOf("mobile");
    let bar = 0;
    if(isAndroidMobile) {
      bar = 56;
    }
    if(this.state.activeDot === 4 && isAndroidMobile) {
      bar = 112
    }
    scrollTo(activeDot * (window.innerHeight + bar), () => {
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
    const ua = navigator.userAgent.toLowerCase();
    const isAndroidMobile = ua.indexOf("android") > -1; // && ua.indexOf("mobile");
    let bar = 0;
    if(isAndroidMobile) {
      bar = 56;
    }
    if(this.state.activeDot === 4 && isAndroidMobile) {
      bar = 112
    }
    scrollTo((this.state.activeDot + 1) * (window.innerHeight + bar), () => {
      this.setState({
        scrolling: false
      })
    })
  }
  scrollToTop = () => {
    this.setState(prevState => ({
      activeDot: 0
    }));
    scrollTo(0, () => {
      this.setState({
        scrolling: false
      })
    })
  }
  blockScrolling = () => {
    console.log('????')
    if(!this.state.isScrollingBlocked) {
      this.setState({
        isScrollingBlocked: true
      })
    }
  }
  render() {
    return (
      <div style={{height: '100%'}} ref={this.backgroundRef}>
        <TextBackground skew="-12" right="-10%" style={{position: 'fixed', zIndex: 1000}} className="only-desktop">
          <TextBackgroundContent skew="12">
            <LogoFederationsContainer>
              <img className="hoverable" src={Logo} width="210" style={{position: 'relative'}} onClick={this.scrollToTop} />
              <Menu className="bianca-font">
                <ul>
                  <li><a href="/#nasze-psy" style={this.state.activeDot === 1 ? {fontWeight: 500} : {}}>NASZE PSY</a></li>
                  <li><a href="/#nasze-mioty" style={this.state.activeDot === 2? {fontWeight: 500} : {}}>NASZE MIOTY</a></li>
                  <li><a href="/#wystawy" style={this.state.activeDot === 3 ? {fontWeight: 500} : {}}>WYSTAWY</a></li>
                  <li><a href="/#galeria" style={this.state.activeDot === 4 ? {fontWeight: 500} : {}}>GALERIA</a></li>
                  <li><a href="/#kontakt" style={this.state.activeDot === 5 ? {fontWeight: 500} : {}}>KONTAKT</a></li>
                </ul>
              </Menu>
              <Federations>
                <img src={FederationLogo1} width="80" height="80" />
                <img src={FederationLogo2} width="80" height="80" />
              </Federations>
            </LogoFederationsContainer>
          </TextBackgroundContent>
        </TextBackground>
        <div className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper
            })`,
            backgroundAttachment: `fixed`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%'
          }}>
          </div>
        <img className="hoverable" src={LogoMobile} width="100" style={{position: 'absolute', left: '10px', top: '10px', zIndex: 10000}} />
        <BackgroundBanner
          color="#6699FF"
          className="full-width-image margin-top-0"
          id="nasze-psy"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper2
            })`,
            backgroundAttachment: `fixed`,
            backgroundPosition: 'inherit',
            display: 'flex',
            flexDirection: 'column'
          }}>
          <BannerTitle>
            Nasze Psy
          </BannerTitle>
          <Container className="container">
            <Content ref={this.servicesRef} onMouseOver={this.blockScrolling}  onMouseOut={this.unblockScrolling}>
              <ContentColumns className="columns is-12">
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>DALIA</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>MARGARET</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>DALIA</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>MARGARET</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
              </ContentColumns>
            </Content>
          </Container>
        </BackgroundBanner>
        <BackgroundBanner
          color="#CE3442"
          className="full-width-image margin-top-0 mobile-background-position"
          id="nasze-mioty"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper3
            })`,
            backgroundPosition: 'inherit',
            backgroundAttachment: `fixed`,
            flexDirection: 'column'
          }}>
          <BannerTitle>
            Nasze Mioty
          </BannerTitle>
          <Container className="container">
            <Content ref={this.servicesRef} onMouseOver={this.blockScrolling}  onMouseOut={this.unblockScrolling}>
              <ContentColumns className="columns is-12">
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>MIOT I</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>MIOT II</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>MIOT III</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>MIOT IV</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
              </ContentColumns>
            </Content>
          </Container>
        </BackgroundBanner>
        <BackgroundBanner
          color="#6666CC"
          className="full-width-image margin-top-0"
          id="wystawy"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper4
            })`,
            backgroundAttachment: `fixed`,
            backgroundPosition: 'inherit',
            flexDirection: 'column'
          }}>
          <BannerTitle>
            Wystawy
          </BannerTitle>
          <Container className="container">
            <Content ref={this.servicesRef} onMouseOver={this.blockScrolling}  onMouseOut={this.unblockScrolling}>
              <ContentColumns className="columns is-12">
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>WYSTAWA I</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>WYSTAWA II</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>WYSTAWA III</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>WYSTAWA IV</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
              </ContentColumns>
            </Content>
          </Container>
        </BackgroundBanner>
        <BackgroundBanner
          color="#5D996C"
          className="full-width-image margin-top-0"
          id="galeria"
          style={{
            backgroundImage: `url(${
              BiancaWallpaper5
            })`,
            backgroundAttachment: `fixed`,
            backgroundPosition: 'inherit',
            flexDirection: 'column'
          }}>
          <BannerTitle>
            Galeria
          </BannerTitle>
          <Container className="container">
            <Content ref={this.servicesRef} onMouseOver={this.blockScrolling}  onMouseOut={this.unblockScrolling}>
              <ContentColumns className="columns is-12">
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>FOLDER I</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>FOLDER II</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>FOLDER III</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Owieczka Świętokrzyska</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
                <div className="column is-6">
                  <ImageSubscriptionContainer>
                    <Image style={{backgroundImage: `url(${pho2})`}}>
                    </Image>
                    <Subscription>
                      <div style={{fontWeight: 500}}>FOLDER IV</div>
                      <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
                    </Subscription>
                  </ImageSubscriptionContainer>
                </div>
              </ContentColumns>
            </Content>
          </Container>
        </BackgroundBanner>
        <section id="kontakt" className="section" style={{padding: '0px 15px 0px 60px', minHeight: '100vh', color: '#008285', width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="container" style={{height: '100%', width: '100%'}}>
            <div className="content" style={{height: '100%'}}>
              <div className="columns" style={{minHeight: '450px'}}>
                <div className="column is-6">
                  <div style={{fontSize: '1.5em', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <p style={{fontSize: '32px', marginBottom: '50px'}}>W celu umówienia się na wizytę prosimy o kontakt telefoniczny:</p>
                    <Row>
                      <FaPhone style={{marginRight: 25, position: 'relative', top: 4}} />
                      <div>
                        +48 504 237 358<br/>
                      </div>
                    </Row>
                    <Row>
                      <FaEnvelope style={{marginRight: 25, position: 'relative', top: 4}} />
                      <div>
                        example@gmail.com
                      </div>
                    </Row>
                    <Row>
                      <FaMapMarkerAlt style={{marginRight: 25, position: 'relative', top: 4}} />
                      <div>
                        ul. Pocztowa 13/9<br/>
                        89-600 Chojnice<br/>
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="column is-6" style={{height: '100%'}}>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                  style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                        placeholder="Twoje imię"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="Twój e-mail"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                    </label>
                    <div className="control">
                      <textarea
                        placeholder="Wiadomość"
                        className="textarea"
                        name={'message'}
                        rows="3"
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="btn-blue" type="submit">
                      Wyślij
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section id="section03" className="demo" onClick={this.state.activeDot < 1 ? this.activateNextDot : undefined} style={this.state.activeDot > 0 ? {opacity: 0} : {}}>
            <span></span>
          </section>
          <div
            className={classNames(
              'scroll-to-top',
              {'scroll-to-top-hidden': true}
            )}
            onClick={this.scrollToTop} >
            <FaChevronUp>
            </FaChevronUp>
          </div>
        </div>
      </div>
    )
  }
}

export default Background

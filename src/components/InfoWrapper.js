import React from 'react';

import { Title, Menu, LogoFederationsContainer, Federations } from '../components/style'

import FederationLogo1 from '../img/federation_logo1.png'
import FederationLogo2 from '../img/federation_logo2.png'
import Logo from '../img/logo.png'
import LogoMobile from '../img/logo_mobile.png'

const InfoWrapper = ({ children }) => {
  return (
    <section className="section section--gradient" style={{marginTop: 50}}>
      <div className="container">

            <div className="dogs-container columns is-multiline" style={{ marginBottom: '2rem' }}>
              <div className="column is-10">
              {
                children
              }
              </div>
              <div className="column is-2">
                <LogoFederationsContainer className="only-desktop" style={{position: 'fixed', padding: 0, height: '100vh', padding: '50px 40px'}}>
                  <a href="/"><img className="hoverable" src={Logo} width="210" style={{position: 'relative'}} /></a>
                  <Menu className="bianca-font">
                    <ul>
                      <li><a href="/#nasze-psy">NASZE PSY</a></li>
                      <li><a href="/#nasze-mioty">NASZE MIOTY</a></li>
                      <li><a href="/#wystawy">WYSTAWY</a></li>
                      <li><a href="/#galeria">GALERIA</a></li>
                      <li><a href="/#kontakt">KONTAKT</a></li>
                    </ul>
                  </Menu>
                  <Federations>
                    <img src={FederationLogo1} width="80" height="80" />
                    <img src={FederationLogo2} width="80" height="80" />
                  </Federations>
                </LogoFederationsContainer>
              </div>
            </div>

      </div>
    </section>
  )
}

export default InfoWrapper

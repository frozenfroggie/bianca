import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import Logo from '../../img/logo.png'

import Layout from '../../components/Layout'

const Thanks = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-direction: column;
  top: 0px;
  z-index: 99;
`

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <section className="section" style={{minHeight: '100vh', display: 'flex', flexDirection: 'center', alignItems: 'center'}}>
            <Thanks className="content">
              <img className="hoverable" src={Logo} width="210" />
              <div style={{marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h3 style={{color: '#00A5A8'}}>Twoja wiadomość została wysłana.</h3>
                <h3 style={{color: '#00A5A8', marginTop: '20px'}}>Dziękuję za zainteresowanie moją hodowlą!</h3>
              </div>
              <Link className="link-check-bitches" to="/">
                <button className="button-blue" style={{marginTop: 40}}>
                  Powrót do strony głównej
                </button>
              </Link>
            </Thanks>
        </section>
      </Layout>
    )
  }
}

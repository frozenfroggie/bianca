import React from 'react'
import Layout from '../../components/Layout'
import Logo from '../../img/logo.png'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <img className="hoverable" src={Logo} width="210" />
          <p>Twoja wiadomość została wysłana. Dziękuję za zainteresowanie moją hodowlą!</p>
        </div>
      </div>
    </section>
  </Layout>
)

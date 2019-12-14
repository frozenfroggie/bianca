import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import logoWhite from '../img/logo-white.png'
import classNames from 'classnames'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      menuExpand: false,
      mainPage: true
    }
  }
  componentDidMount() {
    typeof window !== 'undefined' && window.addEventListener('scroll', (e) => {
      const activeDot = Math.floor(window.scrollY / window.innerHeight);
      if(!this.state.mainPage && (activeDot === 0 || activeDot === 5)) {
        this.setState({
          mainPage: true
        })
      } else if (activeDot !== 0 && activeDot !== 5 && this.state.mainPage) {
        this.setState({
          mainPage: false
        })
      }
    })
  }
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toogleMenu = () => {
    this.setState(prevState => ({
      menuExpand: !prevState.menuExpand
    }))
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            className={
              classNames("navbar-menu-end", "menu")
            }
            onClick={this.toogleMenu}
            >
            <div className={classNames("menu-expand", {"menu-is-active": this.state.menuExpand})}>
            {this.state.menuExpand && <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}>
                <Link className="navbar-item" to="/#nasze-psy">
                  NASZE PSY
                </Link>
                <Link className="navbar-item" to="/#nasze-mioty">
                  NASZE MIOTY
                </Link>
                <Link className="navbar-item" to="/#wystawy">
                  WYSTAWY
                </Link>
                <Link className="navbar-item" to="/#galeria">
                  GALERIA
                </Link>
                <Link className="navbar-item" to="/#kontakt">
                  KONTAKT
                </Link>
            </div>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

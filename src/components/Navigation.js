import React, { Component } from 'react'
import { Link } from 'gatsby'
import book from '../images/book-icon2.png'
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'
import kakao from '../../content/thumbnails/kakao.png'
import ThemeContext from '../context/ThemeContext'

export default class Navigation extends Component {
  static contextType = ThemeContext // eslint-disable-line

  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props
    const theme = this.context

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <img src={book} className="favicon" alt="Book" />
              <span className="text">DMV Book Club</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
            {/* <div className="cta">
              <button
                className="dark-switcher"
                onClick={theme.toggleDark}
                aria-label="Toggle Dark Mode."
                title="Toggle Dark Mode"
              >
                {theme.dark ? (
                  <img src={sun} className="theme-icon" alt="Light Mode" />
                ) : (
                  <img src={moon} className="theme-icon" alt="Dark Mode" />
                )}
              </button>
            </div> */}
            <a
              className="kakao-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.kakao.com/o/gR5zVlY"
              aria-label="kakaotalk open chat"
              title="kakaotalk open chat"
            >
              <img src={kakao} alt="kakao" className="kakao" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

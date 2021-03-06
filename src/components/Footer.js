import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          DMV Book Club
          {/* <a href="https://open.kakao.com/o/gR5zVlY" target="_blank" rel="noopener noreferrer">
            KakaoTalk Open Chat
          </a>
          <Link to="/newsletter">Newsletter</Link>
          <a href="https://www.taniarascia.com/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a> */}
        </div>
        <div>
          {/* <a href="https://github.com/taniarascia" title="Open-source on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a> */}
          {/* <a href="https://open.kakao.com/o/gR5zVlY" title="Kakaotalk Open Chat">
            <img
              src={"https://iopen.kakaocdn.net/favicon.ico"}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Kakaotalk Open Chat"
            />
          </a> */}
          
        </div>
      </footer>
    )
  }
}

import React, { Component } from 'react'
import apple from '../../content/images/apple.png'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={apple} alt="apple Rascia" />
            </div>
            <div>
              <p>
                I’m apple Rascia. I document everything I learn and help thousands of people start
                coding careers.{' '}
                <strong>
                  My site has no ads, sponsors, or bullshit. If you enjoy my content, please
                  consider supporting what I do.
                </strong>
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/applerascia"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/applerascia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" alt="Patreon" /> Become a Patron
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}

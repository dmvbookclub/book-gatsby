import React, { Component } from 'react'
import location from '../../content/images/location.png'
import ridibooks from '../../content/images/ridi-icon.png'
import kyobo from '../../content/images/kyobo-logo.jpg'
export default class NextMeeting extends Component {
    render() {
        return (
            <>
            <h2>이주의 책</h2>
            <div className="next-meeting-section">
                <div className="next-book-img">
                    <img src={'http://image.yes24.com/Goods/63038113/800x0'} className="book-of-week" alt="book of the week" />
                        <figcaption>
                            <a href="https://ridibooks.com/search/?q=%EB%B0%A9%EA%B5%AC%EC%84%9D+%EB%AF%B8%EC%88%A0%EA%B4%80" target="_blank" rel="noopener noreferrer" >
                                <img src={ridibooks} alt="ridibook Icon" className="book-link-img" />
                            </a>{' '}
                            <a href="http://digital.kyobobook.co.kr/digital/ebook/ebookDetail.ink?selectedLargeCategory=001&barcode=4808968331862&orderClick=LAG&Kc=" target="_blank" rel="noopener noreferrer" >
                                <img src={kyobo} alt="kyobo Icon" className="book-link-img" />
                            </a>{' '}
                        </figcaption>
                </div>
                <div className="next-book-meeting">
                    <h3>1월 31일 (금) 7 PM</h3>
                    <p>
                        <a href="https://goo.gl/maps/cVaetQtC1aNjpVKj8" target="_blank" rel="noopener noreferrer" className="location">
                            <img src={location} alt="Location Icon" className="location-icon bounce-7" />
                            Soricha Tea & Theater, Annandale VA
                        </a>{' '}
                         
                    </p>
                    <a className="button" href="https://open.kakao.com/o/gR5zVlY">
                        참석여부 투표하기
                    </a>
                </div>
            </div>
            </>
        )
    }
}

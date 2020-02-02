import React from "react"
import { useFirebase } from "gatsby-plugin-firebase"

import location from '../../content/images/location.png'
import ridibooks from '../../content/images/ridi-icon.png'
import kyobo from '../../content/images/kyobo-logo.jpg'

function FirebaseComponent() {
    const [user, setUser] = React.useState()
    const [bookOfWeek, setBookOfWeek] = React.useState()

    useFirebase(firebase => {
        firebase
            .database()
            .ref("/user")
            .once("value")
            .then(snapshot => {
                setUser(snapshot.val())
            })
    }, [])

    useFirebase(books => {
        books
            .database()
            .ref("/book_of_week")
            .once("value")
            .then(snapshot => {
                setBookOfWeek(snapshot.val())
            })
    }, [])

  
    return (
        <>
            <h2>이주의 책</h2>
           

            

            <p>{bookOfWeek ? bookOfWeek.title : "bookOfWeek title not working"}</p>
            <div className="next-meeting-section">
                <div className="next-book-img">
                    <img src={user ? user.image : "image not"} className="book-of-week" alt="book of the week" />
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
                    <h3>{user ? user.date : "Date not"}</h3>
                    <p>
                        <a href={user ? user.address : "address not"} target="_blank" rel="noopener noreferrer" className="location">
                            <img src={location} alt="Location Icon" className="location-icon bounce-7" />
                            {user ? user.location : "Location not"}
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

export default FirebaseComponent
import React, { Component } from 'react'

export default class NextMeeting extends Component {
    render() {
        return (
            <div className="elevator">
                <h1>{`DMV Book Club`}</h1>
                <p>
                    버지니아, 메릴랜드, 워싱턴 DC 지역 북클럽입니다. 투표를 통해 선정된 책을 각자 읽고 2주에 한번씩 만나 책에 대하여 이야기를 나눕니다.
                </p>
                <p>
                    <a href="https://open.kakao.com/o/gR5zVlY" target="_blank" rel="noopener noreferrer">
                        카카오톡 오픈채팅
                     </a>{' '}
                    에 입장하셔서 더 많은 이야기를 나누어 보세요.<br />
                </p>
            </div>
        )
    }
}

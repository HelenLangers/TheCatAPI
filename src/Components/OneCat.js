import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const OneCat = ({ cat }) => {

    const addVote = (cat) => {
        fetch("https://api.thecatapi.com/v1/votes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3"
            },
            body: JSON.stringify({
                "image_id": cat.id,
                "sub_id": "user-1",
                "value": 1
            })
        })
            .catch(err => console.log('Error', err))
    };

    // 201 response:
    // {
    //     "message": "SUCCESS",
    //     "id": 611475,
    //     "image_id": "9c",
    //     "sub_id": "user-1",
    //     "value": 1,
    //     "country_code": "GB"
    // }

    const handleVoteUpClick = () => {
        addVote(cat);
    }

    return (
        <div className='one-cat-block'>
            <div className='image-container'>
                <img className='image' src={cat.url} />
            </div>
            <div className='overall-score'>
                <p>Score: {cat.votes}</p>
            </div>
            <div className='voting-buttons-container'>
                <button className='voting-buttons' onClick={handleVoteUpClick}>
                    <FontAwesomeIcon icon={faThumbsUp} size="2x" className="thumbup" />
                </button>
                <button className='voting-buttons'>
                    <FontAwesomeIcon icon={faThumbsDown} size="2x" className="thumbdown" />
                </button>
            </div>
        </div>
    )
}

export default OneCat
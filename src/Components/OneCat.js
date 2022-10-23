import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const OneCat = ({ cat, twentyCats, setTwentyCats }) => {

    const addVote = (cat) => {
        fetch("https://api.thecatapi.com/v1/votes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3"
            },
            body: JSON.stringify({
                "image_id": cat.id,
                "sub_id": "user-2",
                "value": 1
            })
        })
            .then(fetch("https://api.thecatapi.com/v1/votes?sub_id=user-2&order=DESC", {
                method: 'GET',
                header: { "Content-Type": "application/json;charset=utf-8","x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3" }
            })
                .then(res => res.json())
                .then((data) => {
                    const copyOfTwentyCats = [...twentyCats];
                    copyOfTwentyCats.forEach((cat) => {
                        data.forEach((vote) => {
                            if (cat.id == vote.image_id) {
                                cat.votes += vote.value
                            }
                        })
                        setTwentyCats(copyOfTwentyCats);
                    })
                }))
            .catch(err => console.log('Error', err))
    };

    const removeVote = (cat) => {
        fetch("https://api.thecatapi.com/v1/votes", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3"
            },
            body: JSON.stringify({
                "image_id": cat.id,
                "sub_id": "user-2",
                "value": -1
            })
        })
            .then(fetch("https://api.thecatapi.com/v1/votes?sub_id=user-2&order=DESC", {
                method: 'GET',
                header: { "Content-Type": "application/json;charset=utf-8","x-api-key": "live_7rTfVO1Ar85eGX2Fa5CSCBHE1OZR0FmF6lE3C5jASWqiOmzwWAdO0ky9FHQEq0A3" }
            })
                .then(res => res.json())
                .then((data) => {
                    const copyOfTwentyCats = [...twentyCats];
                    copyOfTwentyCats.forEach((cat) => {
                        data.forEach((vote) => {
                            if (cat.id == vote.image_id) {
                                cat.votes += vote.value
                            }
                        })
                        setTwentyCats(copyOfTwentyCats);
                    })
                }))
            .catch(err => console.log('Error', err))
    }

    const handleVoteUpClick = () => {
        addVote(cat);
    }

    const handleVoteDownClick = () => {
        removeVote(cat);
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
                <button className='voting-buttons' onClick={handleVoteDownClick}>
                    <FontAwesomeIcon icon={faThumbsDown} size="2x" className="thumbdown" />
                </button>
            </div>
        </div>
    )
}

export default OneCat
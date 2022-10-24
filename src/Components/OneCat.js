import React, {useContext} from 'react'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import CatContext from '../Context/CatContext'

const OneCat = ({ cat }) => {

    const {twentyCats, setTwentyCats} = useContext(CatContext)
    const getVoteURL = "https://api.thecatapi.com/v1/votes?sub_id=user123&limit=1&order=DESC"
    const fetchHeaders = {
        "Content-Type": "application/json;charset=utf-8",
        "x-api-key": config.api_key
    }

    const addVote =  async (cat) => {
        try {
        await fetch("https://api.thecatapi.com/v1/votes", {
            method: 'POST',
            headers: fetchHeaders,
            body: JSON.stringify({
                "image_id": cat.id,
                "sub_id": "user123",
                "value": 1
            })
        })
        const response = await fetch(getVoteURL, {
            method: 'GET',
            headers: fetchHeaders,
        })
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json()
        const copyOfTwentyCats = [...twentyCats];
        copyOfTwentyCats.forEach((cat) => {
            data.forEach((vote) => {
                if (cat.id === vote.image_id) {
                    cat.votes += vote.value
                }
            })
            setTwentyCats(copyOfTwentyCats);
            })
        }
        catch(err){console.log('Error', err)}}
        

    const removeVote =  async (cat) => {
        try {
        await fetch("https://api.thecatapi.com/v1/votes", {
            method: 'POST',
            headers: fetchHeaders,
            body: JSON.stringify({
                "image_id": cat.id,
                "sub_id": "user123",
                "value": -1
            })
        })
        const response = await fetch(getVoteURL, {
            method: 'GET',
            headers: fetchHeaders,
        })
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json()
        const copyOfTwentyCats = [...twentyCats];
        copyOfTwentyCats.forEach((cat) => {
            data.forEach((vote) => {
                if (cat.id === vote.image_id) {
                    cat.votes += vote.value
                }
            })
            setTwentyCats(copyOfTwentyCats);
        })
        }
        catch(err){console.log('Error', err)}}


    const handleVoteUpClick = () => {
        addVote(cat)
    }

    const handleVoteDownClick = () => {
        removeVote(cat);
    }


    return (
        <div className='one-cat-block'>
            <div className='image-container'>
                <img className='image' src={cat.url} alt="cute cat"/>
            </div>
            <div className='overall-score'>
                <p>Score: {cat.votes}</p>
            </div>
            <div className='voting-buttons-container'>
                <button aria-label="vote up" className='voting-buttons' onClick={handleVoteUpClick}>
                    <FontAwesomeIcon icon={faThumbsUp} size="2x" className="thumbup" />
                </button>
                <button aria-label="vote down" className='voting-buttons' onClick={handleVoteDownClick}>
                    <FontAwesomeIcon icon={faThumbsDown} size="2x" className="thumbdown" />
                </button>
            </div>
        </div>
    )
}

export default OneCat
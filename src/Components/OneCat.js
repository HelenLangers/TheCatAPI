import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const OneCat = ({cat}) => {
  return (
    <div className='one-cat-block'>
            <div className='image-container'>
                <img className='image' src={cat.url} />
            </div>
            <div className='overall-score'>
                <p>Score: {cat.votes}</p>
            </div>
            <div className='voting-buttons-container'>
                <button className='voting-buttons' >
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
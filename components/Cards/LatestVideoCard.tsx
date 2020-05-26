import React from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const LatestVideoCard = () => {
    return (
        <div className="seven wide column">
            <div className="card home-card tc">
                    <div className="header">LATEST VIDEO</div>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed src="https://www.youtube.com/embed/videoseries?list=UU87a3QDWF6Q3uLBZk8VEwog" />
                    </ResponsiveEmbed>
            </div>
        </div>
    )
}

export default LatestVideoCard;
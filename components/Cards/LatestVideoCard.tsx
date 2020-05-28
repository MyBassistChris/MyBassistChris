import React from 'react'
import { Embed } from 'semantic-ui-react'

const LatestVideoCard = () => {
    return (
        <div className="seven wide column">
            <div className="card home-card tc">
                <div className="header home-header">LATEST VIDEO</div>
                <br />
                <Embed
                    url='https://www.youtube.com/embed/videoseries?list=UU87a3QDWF6Q3uLBZk8VEwog'
                    active={true}
                />
            </div>
        </div>
    )
}

export default LatestVideoCard;
import React from 'react'
import { Embed } from 'semantic-ui-react'

const LatestVideo = () => {
    return (
        <div className="fourteen wide tablet ten wide computer column">
                <br />
                <div className="home-header tc">LATEST VIDEO</div>
                <br />
                <Embed
                    url='https://www.youtube.com/embed/videoseries?list=UU87a3QDWF6Q3uLBZk8VEwog'
                    active={true}
                />
        </div>
    )
}

export default LatestVideo;
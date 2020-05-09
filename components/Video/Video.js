import React, {Fragment} from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import FacebookPlayer from 'react-facebook-player';

//https://www.facebook.com/watch/?v=1015839508460427
const Video = ({ videoUrl }) => {
    if(videoUrl.toString().includes('FB')) {
        return (
             <FacebookPlayer videoId={ videoUrl.slice(3)} />
        )
    }
    else if(videoUrl.length == 0) {
        return (
            <Fragment />
        )
    }
    else {
        return (
            <ResponsiveEmbed aspectRatio="16by9" id='video'>
                <embed src={ 'https://www.youtube.com/embed/' + videoUrl } allow="autoplay; encrypted-media" allowFullScreen="" />
            </ResponsiveEmbed>
        )
    }
}

export default Video
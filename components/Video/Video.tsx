import React, {Fragment} from 'react'
import FacebookPlayer from 'react-facebook-player';

//Called by SongTable
const Video = ({ videoUrl, fileType }) => {
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
        //Return Video in static position for PDF, dynamic position if HTML
        return (
            <div>
                <div className="ui buttons">
                    <button className="ui button">Sticky</button>
                    <button className="ui button">Small</button>
                    <button className="ui button">Large</button>
                </div>
                <iframe 
                    width="512" height="288"
                    src={ 'https://www.youtube.com/embed/' + videoUrl }
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>    
                </iframe>
            </div>
        )
    }
}

export default Video
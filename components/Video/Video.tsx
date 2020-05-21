import React, {Fragment} from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
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
        if (fileType == 'PDF') {
            return (
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed src={ 'https://www.youtube.com/embed/' + videoUrl }
                    allow="autoplay; encrypted-media"
                    allowFullScreen="" />
                </ResponsiveEmbed>
            )
        }
        return (
            <iframe 
                id='video'
                width="425" height="260"
                src={ 'https://www.youtube.com/embed/' + videoUrl }
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>    
            </iframe>
        )
    }
}

export default Video
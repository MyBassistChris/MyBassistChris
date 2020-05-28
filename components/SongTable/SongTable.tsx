import React, { Fragment } from 'react'
import TabVideoCard from '../Cards/TabVideoCard'

//Called in index.js of [tab]
const SongTable = ({ song, artistUrl, fileType }) => {
    var song2 = song;
    const { songTitle, artist, tuning, videoUrl,  } = song;
    return (
        <Fragment>
            <div className="fourteen wide mobile seven wide computer column">
                <br />  
                <table className="ui celled table">
                    <tbody>
                        <tr>
                            <td>Song</td>
                            <td>{ songTitle.slice(0, -9)}</td>
                        </tr>
                        <tr>
                            <td>Artist</td>
                            <td><a href={ '../' + artistUrl }>{ artist }</a></td>
                        </tr>
                        <tr>
                            <td>Tuning</td>
                            <td>{ tuning }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="fourteen wide mobile seven wide computer column">
                <br />  
                <TabVideoCard
                    id='video'
                    videoUrl={ videoUrl }
                    fileType={ fileType } />
            </div>
        </Fragment>
    )
}

export default SongTable;

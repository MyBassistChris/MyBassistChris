import React from 'react'
import fetch from 'isomorphic-unfetch'

const Artist = ({ artistName, artistUrl, songs }) => {
    if(artistName == '') {
        return (
            <h1 className='tc'>Artist Not Found</h1>
        )
    }
    return (
        <div className="full-height">
            <div className="ui grid centered bg-near-white full-height">
                <div className="fourteen wide column padded">
                    <br />
                    <h1> {artistName}</h1>
                    <div className="ui fluid vertical menu aligned large">
                        {
                            songs.map((song, i) => {
                                var songUrl = artistUrl + "/" + song.songUrl
                                return(
                                    <a className="item" key={i} href={songUrl} >
                                        {song.songTitle}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Artist.getInitialProps = async ({ query }) => {
    var url = query.artist
    const res = await fetch('http://localhost:3000/api/artist?artist=' + url)
    try {
        const json = await res.json()
        var name = json.artist
        const res2 = await fetch('http://localhost:3000/api/songs?artist=' + name.replace('&','%26'))
        const json2 = await res2.json()
        return {artistName: name, artistUrl: url, songs: json2}
    }
    catch(e) {
        return {artistName: '', artistUrl: '', songs: []}
    }
}

export default Artist;
import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Top10Bass = ({ artists, songs}) => {
    var artistArray = artists.map(function(artist) {
        return artist.artist
    })
    return (
        <div className="ui grid centered bg-light">
            <Head>
                <title>Top 10 Bass</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className="fourteen wide column">
                <br />
                <h1>TOP 10 BASS</h1>
                <div className="ui fluid vertical menu aligned large">
                    {
                        songs.map((song, i) => {
                            var artistIndex = artistArray.indexOf(song.artist)
                            var artistUrl = artists[artistIndex].artistUrl
                            var songUrl = "bass-tabs/" + artistUrl + '/' + song.songUrl
                            return(
                                <a className="item" key={i} href={songUrl}>
                                    {song.songTitle}
                                </a>
                            )
                        })
                    }
                </div>
                <br /><br />
            </div>
        </div>
    )
}

Top10Bass.getInitialProps = async () => {
    const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/bass-tabs')
    const json = await res.json()
    const res2 = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/top-10-bass')
    const json2 = await res2.json()
    return {artists: json, songs: json2}
}

export default Top10Bass;
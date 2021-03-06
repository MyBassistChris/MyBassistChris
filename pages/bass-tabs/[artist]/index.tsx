import React, { Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Artist = ({ artistName, artistUrl, songs }) => {
    if(artistName == '') {
        return (
            <div className="ui grid centered bg-light">
                <Head>
                    <title>Artist Not Found</title>
                    <meta property="og:title" content="My page title" key="title" />
                </Head>
                <br />
                <h1 className='tc'>Artist Not Found</h1>
            </div>
        )
    }
    return (
        <div className="ui grid centered bg-light">
            <Head>
                <title> { artistName }</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
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
    )
}

Artist.getInitialProps = async ({ query }) => {
    var url = query.artist
    const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/artist?artist=' + url)
    try {
        const json = await res.json()
        var name = json.artist
        const res2 = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/songs?artist=' + name.replace('&','%26'))
        const json2 = await res2.json()
        return {artistName: name, artistUrl: url, songs: json2}
    }
    catch(e) {
        return {artistName: '', artistUrl: '', songs: []}
    }
}

export default Artist;
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import fetch from 'isomorphic-unfetch'

const Top10Bass = ({ artists, songs}) => {
    var artistArray = artists.map(function(artist) {
        return artist.artist
    })
    return (
        <Row>
            <Col xs={{span: 10, offset: 1}} >
                <h1>TOP 10 BASS</h1>
                <ListGroup>
                    {
                        songs.map((song, i) => {
                            console.log(song.artist)
                            var artistIndex = artistArray.indexOf(song.artist)
                            var artistUrl = artists[artistIndex].artistUrl
                            var songUrl = "bass-tabs/" + artistUrl + '/' + song.songUrl
                            return(
                                <ListGroup.Item 
                                    key={i} 
                                    action href={songUrl}>
                                        {song.songTitle}
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
                <br /><br />
            </Col>
        </Row>
    )
}

Top10Bass.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/bass-tabs')
    const json = await res.json()
    const res2 = await fetch('http://localhost:3000/api/top-10-bass')
    const json2 = await res2.json()
    return {artists: json, songs: json2}
}

export default Top10Bass;
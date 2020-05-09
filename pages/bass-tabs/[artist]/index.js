import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import fetch from 'isomorphic-unfetch'

const Artist = ({ artistName, artistUrl, songs }) => {
    if(artistName == '') {
        return (
            <h1 className='tc'>Artist Not Found</h1>
        )
    }
    return (
        <Row>
            <Col xs={{span: 10, offset: 1}} >
                <h1> {artistName}</h1>
                <ListGroup>
                    {
                        songs.map((song, i) => {
                            var songUrl = artistUrl + "/" + song.songUrl
                            return(
                                <ListGroup.Item
                                    key={i}
                                    action href={songUrl} >
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
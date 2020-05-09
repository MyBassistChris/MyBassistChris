import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Video from '../Video/Video'

const SongTable = ({ song, artistUrl }) => {
    var song2 = song;
    const { songTitle, artist, tuning, videoUrl } = song;
    return (
        <Row>
            <Col lg={6} md={10} >
                <Table>
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
                </Table>
            </Col>
            <Col lg={6} md={10} >
                <Video videoUrl={ videoUrl } />
            </Col>
        </Row>
    )
}

export default SongTable;

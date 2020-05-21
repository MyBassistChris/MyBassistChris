import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Video from '../Video/Video'

//Called in index.js of [tab]
const SongTable = ({ song, artistUrl, fileType }) => {
    var song2 = song;
    const { songTitle, artist, tuning, videoUrl,  } = song;
    return (
        <Row>
            <Col lg={{span: 6, offset: 0}} md={{span: 10, offset: 1}} >
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
            <Col lg={{span: 6, offset: 0}} md={{span: 10, offset: 1}} >
                <Video
                    className='sticky-top'
                    id='video'
                    videoUrl={ videoUrl }
                    fileType={ fileType } />
            </Col>
        </Row>
    )
}

export default SongTable;

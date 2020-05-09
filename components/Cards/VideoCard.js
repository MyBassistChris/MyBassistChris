import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const VideoCard = () => {
    return (
        <Col lg={{span: 6, offset: 0}} md={{span: 10, offset: 1}}>
            <Card className="home-card">
                <Card.Body className="tc">
                    <Card.Header>LATEST VIDEO</Card.Header>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <embed src="https://www.youtube.com/embed/videoseries?list=UU87a3QDWF6Q3uLBZk8VEwog" allow="autoplay; encrypted-media" allowFullScreen="" />
                        </ResponsiveEmbed>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default VideoCard;
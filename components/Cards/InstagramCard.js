import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const InstagramCard = () => {
    return (
        <Col lg={{span: 12, offset: 0}} md={{span: 10, offset: 1}}>
            <Card className="home-card">
                <Card.Body className="tc">
                    <Card.Header>INSTAGRAM FEED</Card.Header>
                    <script src="https://apps.elfsight.com/p/platform.js" defer SameSite="None"></script>
                    <div className="elfsight-app-737b39e8-9a2d-437a-91fb-e54a5bc622c4"></div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default InstagramCard;


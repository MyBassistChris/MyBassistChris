import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'

const ScheduleCard = () => {
    return (
        <Col lg={{span: 6, offset: 0}} md={{span: 10, offset: 1}}>
            <Card className="home-card">
                <Card.Body className="tc">
                    <Card.Header>VIDEO SCHEDULE</Card.Header>
                    <ListGroup>
                        <ListGroup.Item><a href='bass-tabs/my-chemical-romance/early-sunsets-over-monroeville-bass-tab'>My Chemical Romance - Early Sunsets Over Monroeville</a></ListGroup.Item>
                        <ListGroup.Item>Fender PJ Special Modded</ListGroup.Item>
                        <ListGroup.Item><a href='bass-tabs/the-1975/if-youre-too-shy'>The 1975 - If You're Too Shy</a></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ScheduleCard;
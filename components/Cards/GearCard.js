import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'

const GearCard = ({ image, name }) => {
    return (
        <Col md={3} sm={4} xs={6} >
            <Card className="tc dib pa3 ma2 grow bw2 shadow-5 w-100 bg-white">
                <Card.Img className="gearimg" variant="top" src={"img/" + image} />
                <Card.Title style={{fontSize: "12px", height: "2em"}}>{ name }</Card.Title>
            </Card>
        </Col>
    )
}

export default GearCard;
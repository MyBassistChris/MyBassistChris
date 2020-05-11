import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InstagramCard from '../Cards/InstagramCard'
import ScheduleCard from '../Cards/ScheduleCard'
import VideoCard from '../Cards/VideoCard'

const CardContainer = () => {
    return (
        <Jumbotron>
            <Container className="gray-text home-container">
                <Row className='home-row'>
                    <VideoCard />
                    <ScheduleCard />
                </Row>
                <Row>
                    <InstagramCard />
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default CardContainer;
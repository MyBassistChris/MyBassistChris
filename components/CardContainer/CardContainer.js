import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ScheduleCard from '../Cards/ScheduleCard'
import VideoCard from '../Cards/VideoCard'

const CardContainer = () => {
    return (
        <Container>
            <Row className="gray-text">
                <VideoCard />
                <ScheduleCard />
            </Row>
        </Container>
    )
}

export default CardContainer;
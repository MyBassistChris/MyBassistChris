import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import About from '../Cards/About'
import ScheduleCard from '../Cards/ScheduleCard'
import VideoCard from '../Cards/VideoCard'

const CardContainer = () => {
    return (
        <div className="ui grid stackable centered bg-near-white gray-text">
                <VideoCard />
                <ScheduleCard />
            <About />
        </div>
    )
}

export default CardContainer;
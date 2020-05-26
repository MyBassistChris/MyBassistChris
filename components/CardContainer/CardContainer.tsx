import React, { Fragment } from 'react'
import AboutCard from '../Cards/AboutCard'
import ScheduleCard from '../Cards/ScheduleCard'
import LatestVideoCard from '../Cards/LatestVideoCard'

const CardContainer = () => {
    return (
        <Fragment>
            <LatestVideoCard />
            <ScheduleCard />
            <AboutCard />
        </Fragment>
    )
}

export default CardContainer;
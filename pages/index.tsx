import React from 'react'
import Banner from '../components/Banner/Banner'
import AboutCard from '../components/Cards/AboutCard'
import ScheduleCard from '../components/Cards/ScheduleCard'
import LatestVideoCard from '../components/Cards/LatestVideoCard'

const Home = () => {
    return (
        <div className="ui grid stackable centered bg-light gray-text">
            <Banner />
            <LatestVideoCard />
            <ScheduleCard />
            <AboutCard />
        </div>
    )
}

export default Home;

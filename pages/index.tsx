import React from 'react'
import Banner from '../components/Banner/Banner'
import CardContainer from '../components/CardContainer/CardContainer'

const Home = () => {
    return (
        <div className="ui grid stackable centered bg-near-white gray-text">
            <Banner />
            <CardContainer />
        </div>
    )
}

export default Home;

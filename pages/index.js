import React, {Component, Fragment} from 'react'
import Banner from '../components/Banner/Banner'
import CardContainer from '../components/CardContainer/CardContainer'
import About from '../components/About/About'

const Home = () => {
    return (
            <Fragment>
                <Banner />
                    <CardContainer />
                    <About />
            </Fragment>
    )
}

export default Home;

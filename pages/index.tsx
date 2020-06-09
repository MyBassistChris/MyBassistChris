import React from 'react'
import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import AboutCard from '../components/Cards/AboutCard'
import ScheduleCard from '../components/Cards/ScheduleCard'
import LatestVideo from '../components/LatestVideo/LatestVideo'
import PedalboardCard from '../components/Cards/PedalboardCard'
import AOS from 'aos';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //Animate on scroll
        AOS.init({
            duration : 700
        })
        //AOS only works after resizing window for some reason. Refresh is a workaround
        AOS.refresh();
    }
    
    render() {
        return(
            <div className="ui grid stackable centered bg-light gray-text home-wrapper">
                <Head>
                    <title>My Bassist Chris</title>
                    <meta property="og:title" content="My page title" key="title" />
                </Head>
                <Banner />
                <LatestVideo />
                <div className="sixteen wide column stagger" />
                <div className="left-column fourteen wide tablet seven wide computer column">
                    <ScheduleCard />
                    <div className="stagger" />
                    <AboutCard />
                </div>
                <div className="right-column fourteen wide tablet seven wide computer column">
                    <div className="stagger" />
                    <PedalboardCard />
                </div>
            </div>
        )
    }
}

export default Home;

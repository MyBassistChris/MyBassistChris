import React from 'react'

const AboutCard = () => {
    return (
        <div className="card home-card bg-light" data-aos="fade-up">
            <div className="content">
                <div className="header tc home-header">ABOUT</div>
                <br />
                <img className="aboutimg" src={"img/about2.jpg"} alt="About" />
                <br />
                <div className="description">
                I'm Chris Khalife and I upload bass videos to YouTube under the name "My Bassist Chris". I have been uploading videos for nine years and have been playing bass for fourteen years. My first instrument I learned at the age of nine was piano, but transitioned to guitar at age twelve and bass shortly after. I chose the name My Bassist Chris for two reasons: To pay homage to my favorite band My Chemical Romance and because being a bassist in many bands people would refer to me as my bassist Chris.
                </div>
            </div>
        </div>
    )
}

export default AboutCard;


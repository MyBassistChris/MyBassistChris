import React from 'react'

const PedalboardCard = () => {
    return (
        <div className="card home-card bg-light" data-aos="fade-up">
            <div className="content">
                <div className="header tc home-header">PEDALBOARD</div>
                <br />
                <img className="w100" src={"img/pedalboard.jpg"} alt="Pedalboard" />
                <div className="description">
                    <br />
                    <ul className="ui list">
                        <li>MXR M87 Bass Compressor</li>
                        <li>Source Audio C4 Synth</li>
                        <li>Electro-Harmonix POG2 Polyphonic Octave Generator</li>
                        <li>Way Huge Green Rhino MkII Overdrive</li>
                        <li>Way Huge Pork and Pickle Bass Overdrive</li>
                        <li>Boss BD-2W Waza Craft Blues Driver</li>
                        <li>Electro-Harmonix The Silencer</li>
                        <li>TC Electronic Flashback Delay and Looper Pedal</li>
                        <li>Boss PS-6 Harmonist</li>
                        <li>Electro-Harmonix Bad Stone Phase Shifter</li>
                        <li>Korg Pitchblack Custom Pedal Tuner</li>
                        <li>Tech 21 Sansamp 3-Channel Programmable Bass Driver DI</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PedalboardCard
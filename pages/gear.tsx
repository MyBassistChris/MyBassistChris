import React, { Fragment } from "react"
import GearCard from "../components/Cards/GearCard"
import fetch from 'isomorphic-unfetch'

const Gear = ({gearArray}) => {
    var currentGear = []
    var otherGear = []
    var counter = 0;
    //Split gear into two arrays based on field Current
    gearArray.forEach(function(gear) {
        if (gear.current) {
            currentGear.push(gear)
        }
        else {
            otherGear.push(gear)
        }
    })
    return (
        <Fragment>
            <div className="ui grid stackable stretched equal width bg-near-white gear-container padded">
                <div className="row">
                    <h1 className="center">MAIN GEAR</h1>
                </div>
                <br />
                {
                    currentGear.map((gear, i) => {
                        return(
                            <GearCard
                                image={gear.image}
                                name={gear.gear}
                            />
                        )
                    })
                }
                <br />
                <div className="row">
                    <h1 className="center">OTHER GEAR</h1>
                </div>
                {
                    otherGear.map((gear, i) => {
                        return(
                            <GearCard 
                                image={gear.image}
                                name={gear.gear}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

//Gear.getInitialProps = async () => {
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/gear')
    const json = await res.json()
    return { props: { gearArray: json } }
}

export default Gear;
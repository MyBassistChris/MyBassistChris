import React, { Fragment } from "react"
import GearCard from "../components/Cards/GearCard"
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next'

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
                <div className="centered row">
                    <h1>MAIN GEAR</h1>
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
                <div className="centered row">
                    <h1>OTHER GEAR</h1>
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
//export async function getServerSideProps() {
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/gear')
    const json = await res.json()
    return { props: { gearArray: json } }
}

export default Gear;
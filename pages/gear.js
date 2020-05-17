import React from "react"
import GearCard from "../components/Cards/GearCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import fetch from 'isomorphic-unfetch'

const Gear = ({gearArray}) => {
    var currentGear = []
    var otherGear = []

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
        <Container fluid className='gray-text tc bg-washed-green gear-container'>
            <br />
            <h1>MAIN GEAR</h1>
            <br />
            <Row>
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
            </Row>

            <br />
            <h1>OTHER GEAR</h1>
            <br />
            <Row>
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
            </Row>
        </Container>
    )
}

//Gear.getInitialProps = async () => {
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/gear')
    const json = await res.json()
    return { props: { gearArray: json } }
}

export default Gear;
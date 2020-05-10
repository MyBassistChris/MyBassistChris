import React from "react"
import GearCard from "../components/Cards/GearCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const Gear = ({currentGear, otherGear}) => {
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

Gear.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/gear')
    const json = await res.json()
    const res2 = await fetch('http://localhost:3000/api/otherGear')
    const json2 = await res2.json()
    return { currentGear: json, otherGear: json2}
}

export default Gear;
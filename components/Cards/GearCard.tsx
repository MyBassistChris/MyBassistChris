import React from 'react'

const GearCard = ({ image, name }) => {
    return (
        <div className="four wide columns tc" >
             <div className="ui card dib pa3 ma2 grow bw2 shadow-5 w-100">
                <img className="gearimg" src={"img/" + image} />
                <div className="header" style={{fontSize: "12px", height: "2em"}}>
                    { name }
                </div>
            </div>
        </div>
    )
}

export default GearCard;
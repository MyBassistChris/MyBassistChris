import React from 'react'

const GearCard = ({ image, name }) => {
    return (
        <div className="eight wide mobile four wide computer column">
             <div className="ui card centered gear-card">
                <div className="content center aligned">
                    <img className="gearimg" src={"img/" + image} />
                    <div className="description">
                        { name }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearCard;
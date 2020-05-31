import React from 'react'

const Menu = () => {
    return (
        <div className="ui fixed menu bg-dark">
            <a href="/"className="header item left floated">
                <img src="/img/logo2.png" alt="MyBassistChris" />
            </a>
            <a className="item" href="/bass-tabs">BASS TABS</a>
            <a className="item" href="/top-10-bass">TOP 10 BASS</a>
            <a className="item" href="/gear">GEAR</a>
        </div>
    )
}

export default Menu;
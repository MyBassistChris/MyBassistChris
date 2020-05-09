import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky-top navbar-expand-sm" id="navbarSupportedContent">
            <div className="topnav">
                <span className="navbar-brand btn" href="/">
                    <img src="/img/logo.png" width="50" height="50" alt="" />
                </span>
                <span className="nav fr">
                    <a className="btn b" href="/">HOME</a>
                    <a className="btn b" href="/bass-tabs">BASS TABS</a>
                    <a className="btn b" href="/top-10-bass">TOP 10 BASS</a>
                    <a className="btn b" href="/gear">GEAR</a>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
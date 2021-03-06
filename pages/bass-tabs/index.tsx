import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

interface bassState {
    artists: any[]
    searchField: string
}

class BassTabs extends Component<{}, bassState> {
    constructor(props) {
        super(props)
        this.state = {
            artists: props.artists,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { artists, searchField } = this.state;
        const filteredArtists = artists.filter(artist => {
            return artist.artist.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="ui grid centered bg-light">
                <Head>
                    <title>Artists</title>
                    <meta property="og:title" content="My page title" key="title" />
                </Head>
                <div className="fourteen wide column">
                    <br />
                    <h1>ARTISTS</h1>
                        <div className="ui input focus fluid">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search..."
                                onChange= {this.onSearchChange}
                            />
                        </div>
                    <div className="ui fluid vertical menu aligned large">
                        {
                            filteredArtists.map((artist, i) => {
                                return(
                                    <a className="item" key={i} href={"bass-tabs/" + artist.artistUrl}>
                                        {artist.artist}
                                    </a>
                                )
                            })
                        }
                    </div>
                    <br /><br />
                </div>
            </div>
        )
    }
}

BassTabs.getInitialProps = async () => {
    const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/bass-tabs')
    const json = await res.json()
    return { artists: json }
}
  
export default BassTabs;
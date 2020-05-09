import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import fetch from 'isomorphic-unfetch'

class BassTabs extends Component {
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
            <Row>
                <Col xs={{span: 10, offset: 1}} >
                    <h1>ARTISTS</h1>
                    <ListGroup>
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Search..."
                            onChange= {this.onSearchChange}
                        />
                        <br />
                        {
                            filteredArtists.map((artist, i) => {
                                return(
                                    <ListGroup.Item 
                                        key={i} 
                                        action href={"bass-tabs/" + artist.artistUrl}>
                                            {artist.artist}
                                        </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                    <br /><br />
                </Col>
            </Row>
        )
    }
}

BassTabs.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/bass-tabs')
    const json = await res.json()
    return { artists: json }
}
  
export default BassTabs;
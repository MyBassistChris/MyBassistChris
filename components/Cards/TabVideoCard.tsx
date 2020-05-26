import React, {Component, Fragment} from 'react'
import FacebookPlayer from 'react-facebook-player';

interface tabState {
    videoUrl: string
    fileType: string
    width: number
    height: number
    position: string
    positionText: string
    sizeText: string
}

//Called by SongTable
class TabVideoCard extends Component<{}, tabState>  {
    constructor(props) {
        super(props)
        this.state = {
            videoUrl: props.videoUrl,
            fileType: props.fileType,
            width: 512,
            height: 288,
            position: "static",
            positionText: "Sticky",
            sizeText: "Large"
        }
        this.changePosition= this.changePosition.bind(this);
        this.changeSize= this.changeSize.bind(this);
    }

    changePosition(e) {
        if (this.state.position == "static") {
            this.setState({ position: "fixed", positionText: "Static" })
        }
        else {
            this.setState({ position: "static", positionText: "Sticky" })
        }
    }

    changeSize(e) {
        if (this.state.width == 512) {
            this.setState({width: 640, height: 360, sizeText: "Small"})
        }
        else {
            this.setState({width: 512, height: 288, sizeText: "Large"})
        }
    }

    render() {
        const { videoUrl, fileType, width, height, position, positionText, sizeText, float } = this.state;
        if(videoUrl.toString().includes('FB')) {
            return (
                 <FacebookPlayer videoId={ videoUrl.slice(3)} />
            )
        }
        else if(videoUrl.length == 0) {
            return (
                <Fragment />
            )
        }
        else {
            //Return Video in static position for PDF, dynamic position if HTML
            return (
                <div className="tab-video-container" style={{ position: position, float: float}}>
                    <iframe
                        width={ width } height={ height }
                        src={ 'https://www.youtube.com/embed/' + videoUrl }
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>    
                    </iframe>
                    <div className="ui buttons" style={{ display: "block" }}>
                        <button className="ui button" onClick={ this.changePosition }>
                            { positionText}
                        </button>
                        <button className="ui button" onClick={ this.changeSize }>
                            { sizeText }
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default TabVideoCard
import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Document, Page } from 'react-pdf';

class PDFTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: props.filePath,
            numPages: null
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { filePath, numPages } = this.state;
        return (
            <Fragment>
                <Row>
                    <Col lg={6} md={10} >
                        <div className="sticky-top" id="video" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Document
                            file={'../../' + filePath}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                            className='center'
                        >
                            {
                                Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        />
                                    ),
                                    )
                            }
                        </Document>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default PDFTab;
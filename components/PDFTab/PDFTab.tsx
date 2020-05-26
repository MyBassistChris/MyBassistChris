import React, { Component, Fragment } from 'react'
import { Document, Page } from 'react-pdf';

interface pdfState {
    filePath: string
    numPages: number
}

class PDFTab extends Component<{}, pdfState> {
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
            <div className="fourteen wide column">
                <Document
                    file={'../../' + filePath}
                    onLoadSuccess={this.onDocumentLoadSuccess}
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
            </div>
        )
    }
}

export default PDFTab;
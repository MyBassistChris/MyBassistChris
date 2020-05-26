import React, { Component } from 'react'

const HTMLTab = ({ filePath }) => {
    var tabFile = require('html-loader?-attributes!../../public/' + filePath);
    var htmlDoc = {__html: tabFile};
    return (
        <div className="fourteen wide column left float">
            <br />
            <div className="tab"  dangerouslySetInnerHTML={htmlDoc} />
            <br /><br /><br />
        </div>
    )
}

export default HTMLTab;
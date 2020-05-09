import React, { Component, Fragment } from 'react'

const HTMLTab = ({ filePath }) => {
    var tabFile = require('html-loader?-attributes!../../public/' + filePath);
    var htmlDoc = {__html: tabFile};
    return (
        <Fragment>
            <br /><br /><br />
            <div className="tab"  dangerouslySetInnerHTML={htmlDoc} />
            <br /><br /><br />
        </Fragment>
    )
}

export default HTMLTab;
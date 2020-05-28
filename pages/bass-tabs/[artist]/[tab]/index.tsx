import React from 'react'
import fetch from 'isomorphic-unfetch'
import SongTable from '../../../../components/SongTable/SongTable'
import PDFTab from '../../../../components/PDFTab/PDFTab'
import HTMLTab from '../../../../components/HTMLTab/HTMLTab'

const Tab = ({song, artistUrl, filePath}) => {
    let tabFile;
    var fileType;
    
    //Check whether to load a PDF Tab or HTML Tab
    if (filePath.includes('.pdf')) {
        fileType = 'PDF'
        tabFile = <PDFTab filePath = {filePath} />
    }
    else if (filePath.includes('.html')) {
        fileType = 'HTML'
        tabFile='yellow'
        tabFile = <HTMLTab filePath = {filePath}/>
    }
    else {
        return (
            <div className="ui grid">
                <br />
                <h1 className='center aligned'>Tab Not Found</h1>
            </div>
        )
    }

    return (
        <div className="ui grid centered">
             <SongTable 
                song = {song}
                artistUrl = {artistUrl}
                fileType = {fileType}
            />
            { tabFile }
        </div>
    )
}

Tab.getInitialProps = async ({ query }) => {
    var song = query.tab
    var artistUrl = query.artist
    //Get artist name based on URL
    try {
        const artistQuery = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/artist?artist=' + artistUrl)
        const artistResult = await artistQuery.json()
        var artistName = artistResult.artist
        var urlParams = '?artistName=' + artistName.replace('&','%26') + '&songUrl=' + song
        //Get song info based on artistName & song Url
        const songQuery = await fetch(`https://my-bassist-chris.mybassistchris.now.sh/api/tab${urlParams}`)
        const songResult = await songQuery.json()
        var filePath = "artists/" + artistUrl + "/" + song + songResult.tabType
        return {song: songResult, artistUrl: artistUrl, filePath: filePath}
    }
    catch(e) {
        return {song: [], filePath: 'none'}
    }
}

export default Tab;
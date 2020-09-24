import React, { useState, useCallback, useEffect } from 'react'

import FetchVideos from './FetchVideos'

function Videos() {

  return (
    <div className='videos-container'>
      <div className='videos-card'>
        <h1>VIDEOS</h1>
        {/* <nav className='nav-container'>
          <ul>
            <li>ALL</li>
            <li>CODE KATAS</li>
            <li>CSS ART</li>
            <li>WEB / APP</li>
          </ul>
        </nav> */}
        <FetchVideos />
      </div>
    </div>
  )
}

export default Videos

// const fetchMyAPI = useCallback(async () => {
//   let response = await fetch('http://localhost:3001/videos')
//   response = await response.json()
//   getVideos(response)
// }, [])

// useEffect(() => {
//   fetchMyAPI()
// }, [fetchMyAPI])

// useEffect(() => {
//   console.log(JSON.parse(videos))
// })

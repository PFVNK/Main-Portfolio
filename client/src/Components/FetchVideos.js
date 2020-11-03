import React, { useState, useEffect, useCallback } from 'react'

function FetchVideos() {
  const [videos, getVideos] = useState()

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch('https://patrick-main-portfolio.herokuapp.com/videos')
    response = await response.json()
    getVideos(response)
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  useEffect(() => {
    if (videos) {
      return videos.filter(video => video.snippet.thumbnails.default !== undefined).map(video => {
        console.log(video.snippet.resourceId.videoId)
      })
    }
  })

  if (videos) {
    return (
      <div className='videos-video'>
        {videos.reverse().filter(video => video.snippet.thumbnails.high !== undefined).map((video, i) => {
          return <div key={i} className='video'>
            <img className='gallery-img' src={video.snippet.thumbnails.high.url} alt={'test'} />
            <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}_channel=P-FVNKCODES`}><h2>{video.snippet.title}</h2></a>
            <p>{video.snippet.description}</p>
          </div>
        })}
      </div>
    )
  } else {
    return null
  }

}

export default FetchVideos

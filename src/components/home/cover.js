import React, { useState, useRef, useEffect } from 'react'

const Cover = ({ HomePage }) => {
  const video = useRef()
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const onDataLoaded = () => setShowVideo(true)

    if (video && video.current) {
      const videoEl = video.current
      if (videoEl.readyState === 4) onDataLoaded()
      else {
        videoEl.addEventListener('canplaythrough', onDataLoaded)
        videoEl.addEventListener('loadeddata', onDataLoaded)
        return () => {
          videoEl.removeEventListener('canplaythrough', onDataLoaded)
          videoEl.removeEventListener('loadeddata', onDataLoaded)
        }
      }
    }
  }, [])

  return (
    <>
      <div className="cover-video">
        <div className={`video ${showVideo ? 'video--show' : ''} overflow-hidden`}>
          <video autoPlay muted loop ref={video}>
            <source src="/snowbw.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="scroll-down">
          <svg width="16" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="scroll-down" d="M0.239607 1.88799C0.239607 1.63199 0.335605 1.40799 0.527605 1.21599C0.719605 1.02399 0.959606 0.927994 1.24761 0.927994L6.43161 0.927994C6.87961 0.927994 7.23161 1.03999 7.48761 1.26399C7.74361 1.48799 7.99961 1.82399 8.25561 2.27199L15.1676 12.688L22.0316 2.27199C22.2876 1.85599 22.5436 1.51999 22.7996 1.26399C23.0876 1.03999 23.4556 0.927994 23.9036 0.927994L29.0876 0.927994C29.3756 0.927994 29.5996 1.02399 29.7596 1.21599C29.9516 1.40799 30.0476 1.63199 30.0476 1.88799C30.0476 2.11199 29.9516 2.38399 29.7596 2.70399L17.9996 20.032C17.6796 20.512 17.3596 20.864 17.0396 21.088C16.7196 21.312 16.3356 21.424 15.8876 21.424H14.3996C13.9516 21.424 13.5676 21.312 13.2476 21.088C12.9596 20.864 12.6556 20.512 12.3356 20.032L0.575605 2.70399C0.351605 2.41599 0.239607 2.14399 0.239607 1.88799Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="container pb-5">
        <div className="cover row justify-content-center align-items-center">
          <div className="col-11 col-md-9 col-lg-6 text-center">
            <h1 className="header_title text-white pb-3" style={{ fontSize: '56px' }}>{HomePage.myName}</h1>
            <p className="text-white fw-bold">{HomePage.whoAmI}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover

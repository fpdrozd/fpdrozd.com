import React, { useState, useRef, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import 'swiper/swiper.scss'
import 'src/styles/swiper.scss'
import SwiperCore, { Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation]);

const Project = ({ project }) => {
  const [showMore, setShowMore] = useState('none')
  const body = useRef(null)

  const toggleShowMore = () => {
    setShowMore(showMore === 'more' ? 'less' : 'more')
  }

  useEffect(() => {
    if (body.current.scrollHeight > body.current.clientHeight) setShowMore('more')
    else if (showMore !== 'none') setShowMore('none')
  }, [body.current])

  return (
    <div className="my-work_card my-5">
      {project.title === 'RevRegistration' ? (
        <img width="100%" src="revdevice.gif" alt="" />
      ) : (
        project.pictures.length === 1 ? (
          <GatsbyImage width="100%" image={getImage(project.pictures[0])} alt={project.pictures[0].description} />
        ) : (
          <Swiper navigation slidesPerView={1}>
            {project.pictures.map((picture, idx) => (
              <SwiperSlide key={idx}>
                <GatsbyImage width="100%" image={getImage(picture)} alt={picture.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}

      <div className="my-work_card_body p-4 text-center">
        <h3 className="text-center pb-2">{project.title}</h3>
        <span className="text-center px-4 pt-2 fw-bold" style={{ borderTop: 'solid 2px black' }}>{project.date}</span>

        <div className="d-flex flex-wrap justify-content-center my-4">
          {project.technologies && project.technologies.map((technology, idx) => (
            <div style={{ backgroundColor: technology.color, color: 'white', borderRadius: '15px' }} className="d-flex align-items-center p-1 me-2 mb-2" key={idx}>
              <img className="mx-1" height="20px" src={`data:image/png;base64,${technology.iconBase64.iconBase64}`} alt="" />
              <span className="fw-bold me-1">{technology.name}</span>
            </div>
          ))}
        </div>

        <div className={`body text-justify ${showMore !== 'less' ? 'line-clamp' : ''}`} ref={body}>
          <div>
            {documentToReactComponents(JSON.parse(project.body.raw))}
          </div>
        </div>

        {showMore !== 'none' ? (
          <div className="mt-1 fw-bold">
            <span style={{ color: project.linkColor, cursor: 'pointer' }} onClick={toggleShowMore}>
              {showMore === 'more' ? 'show more' : 'show less'}
              {showMore === 'more' ? (
                <FontAwesomeIcon icon={faChevronDown} className="ms-2"></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faChevronUp} className="ms-2"></FontAwesomeIcon>
              )}
            </span>
          </div>
        ) : ''}


          <div className="d-flex mt-4" role="group" aria-label="Basic example" style={{ width: '100%' }}>
            {project.linkUrl ? (
              <a className={`mywork_card_button flex-grow-1 btn d-inline-flex align-items-center justify-content-center text-white ${project.githubUrl ? 'rounded-right-0' : ''}`}
                href={project.linkUrl} style={{ backgroundColor: project.linkColor }} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className="icon me-2"></FontAwesomeIcon>
                <span className="fw-bold">{project.link}</span>
              </a>
            ) : ''}
            {project.githubUrl ? (
              <a className={`btn btn-dark d-inline-flex align-items-center justify-content-center ${project.linkUrl ? 'rounded-left-0' : 'flex-grow-1'}`}
                href={project.githubUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon--brand me-2"></FontAwesomeIcon>
                <span className="fw-bold">Code</span>
              </a>
            ) : ''}
          </div>
      </div>
    </div>
  )
}

export default Project

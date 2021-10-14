import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const AboutMe = ({ HomePage }) => {
  const graphqlResult = useStaticQuery(graphql`
    query AboutMeQuery {
      contentfulHomeAboutMe {
        title
        paragraph {
          paragraph
        }
        learnMore
        linkedIn
        github
        picture {
          gatsbyImageData(layout: CONSTRAINED)
          description
        }
      }
    }
  `)

  const AboutMe = graphqlResult.contentfulHomeAboutMe

  return (
    <div className="container">
      <div className="mycard about-me d-flex flex-column-reverse flex-lg-row mt-2 mb-5 mt-md-5">
        <div className="about-me_body d-flex flex-column justify-content-between p-5">
          <div>
            <h2 className="text-center text-lg-start">{AboutMe.title}</h2>
            <p className="pt-3 text-justify">{AboutMe.paragraph.paragraph}</p>
            <p className="pb-3 text-center text-lg-start">{AboutMe.learnMore}</p>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start">
            <a className="btn btn-primary btn-linkedin d-inline-flex align-items-center justify-content-center me-md-3 mb-3 mb-md-0"
              href={AboutMe.linkedIn} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon--brand me-2"></FontAwesomeIcon>
              <span className="fw-bold">My LinkedIn</span>
            </a>
            <a className="btn btn-dark d-inline-flex align-items-center justify-content-center"
              href={AboutMe.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon--brand me-2"></FontAwesomeIcon>
              <span className="fw-bold">My Github</span>
            </a>
          </div>
        </div>
        <GatsbyImage className="about-me_picture" image={getImage(AboutMe.picture)} alt={AboutMe.picture.description} />
      </div>
    </div>
  )
}

export default AboutMe

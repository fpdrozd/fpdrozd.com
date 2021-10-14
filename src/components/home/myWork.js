import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Masonry from 'react-masonry-css'

import Project from 'src/components/home/myWork/project'

const MyWork = () => {
  const graphqlResult = useStaticQuery(graphql`
    query MyWorkQuery {
      contentfulHomeMyWork {
        title
        projects {
          pictures {
            gatsbyImageData(layout: CONSTRAINED)
            description
          }
          technologies {
            iconBase64 {
              iconBase64
            }
            name
            color
          }
          title
          date
          body {
            raw
          }
          link
          linkUrl
          linkColor
          githubUrl
        }
      }
    }
  `)

  const MyWork = graphqlResult.contentfulHomeMyWork

  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 200)
  }, [])

  return (
    <div className="container">
      <h2 className="text-center pb-0 pb-md-3 pt-4 pt-md-5">{MyWork.title}</h2>
      <Masonry breakpointCols={{ default: 2, 992: 1 }} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {MyWork.projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </Masonry>
    </div>
  )
}

export default MyWork

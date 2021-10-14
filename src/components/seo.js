import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { contentfulSeo } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = contentfulSeo

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || `https:${defaultImage.file.url}`}`,
    url: `${siteUrl}${pathname}`,
  }

  const htmlAttributes = {
    lang: 'en'
  }

  return (
    <Helmet title={seo.title} titleTemplate={!title ? titleTemplate : null} htmlAttributes={htmlAttributes}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    contentfulSeo {
      defaultTitle: title
      titleTemplate
      defaultDescription: description
      siteUrl: url
      defaultImage: image {
        file {
          url
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'

import Seo from 'src/components/seo'
import Header from 'src/components/header'
import Cover from 'src/components/home/cover'
import AboutMe from 'src/components/home/aboutMe'
import MyWork from 'src/components/home/myWork'
import Footer from 'src/components/footer'

const Home = ({ data }) => {
  const HomePage = data.contentfulHomePage

  return (
    <>
      <Seo />
      <Header />
      <Cover HomePage={HomePage} />
      <AboutMe />
      <MyWork />
      <Footer />
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    contentfulHomePage {
      myName
      whoAmI
    }
  }
`

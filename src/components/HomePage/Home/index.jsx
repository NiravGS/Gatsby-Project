import React from "react"
import { Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

import "./style.scss"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <>
      <div className="home__page__element">
        <Container>
          <div className="home__bg">
            <Img fluid={data.placeholderImage.childImageSharp.fluid}  />
          </div>
          <div className="content__home">
            <h1>The easiest way to build your website</h1>
            <Link className="home__btn" to="/">
              <span>start today</span>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home

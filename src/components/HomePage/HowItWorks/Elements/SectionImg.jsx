import React from "react"
import "../style.scss"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Title = () => {
  const data = useStaticQuery(graphql`
    query {
      SectionImg1: file(relativePath: { eq: "HowItWorks/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SectionImg2: file(relativePath: { eq: "HowItWorks/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SectionImg3: file(relativePath: { eq: "HowItWorks/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.SectionImg1?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  if (!data?.SectionImg2?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  if (!data?.SectionImg3?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <>
      <div className="title__SectionImg">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="Section__img">
                <Img fluid={data.SectionImg1.childImageSharp.fluid} />
              </div>
            </Col>
            <Col lg={4}>
              <div className="Section__img">
                <Img fluid={data.SectionImg2.childImageSharp.fluid} />
              </div>
            </Col>
            <Col lg={4}>
              <div className="Section__img">
                <Img fluid={data.SectionImg3.childImageSharp.fluid} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Title

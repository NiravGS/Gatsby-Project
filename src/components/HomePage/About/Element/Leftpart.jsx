import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LeftPart = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "About/true.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
      <div className="left-part">
        <p>About Our Company</p>
        <h1>With our knowledge we guarentee success</h1>
        <div className="decorate-part">
          <div className="content-area">
            <div className="content-area-img">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <p>
              Whether you need to create a brand from scratch, including
              marketing materials
            </p>
          </div>
          <div className="content-area">
            <div className="content-area-img">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <p>
              A beautiful and functional website or whether you are looking for
              a design refresh we are confident you will be pleased with the
              results
            </p>
          </div>
          <div className="content-area">
            <div className="content-area-img">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <p>
              We have also worked with some big names and her designs have won
              her a number of industry awards
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftPart

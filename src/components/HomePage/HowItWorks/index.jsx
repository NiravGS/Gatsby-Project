import React from "react"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import "./Elements/Title"
import Title from "./Elements/Title"
import SectionImg from "./Elements/SectionImg"
import "./style.scss"



const HowItWorks = () => {
  return (
    <>
      <div className="howItWorks">
        <Container>
            <Title />
          <SectionImg />
        </Container>
      </div>
    </>
  )
}

export default HowItWorks

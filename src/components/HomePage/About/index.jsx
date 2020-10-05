import React from "react"
import "./style.scss"
import { Container, Row, Col } from "react-bootstrap"
import LeftPart from "./Element/Leftpart"
import RightPart from "./Element/RightPart"

const About = () => {
  return (
    <>
      <div className="About__info">
        <Container>
          <Row>
            <Col lg={6} >
              <LeftPart />
            </Col>
            <Col lg={6} >
              <RightPart />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About

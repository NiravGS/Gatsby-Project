import React from "react"
import { Container } from "react-bootstrap"


import HomeImg from "../../../Images/Home.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

const Home = () => {
  return (
    <>
      <div className="home__page__element">
        <Container>
          <div className="home__bg">
            <img src={HomeImg} alt="" className="img-fluid" />
          </div>
          <div className="content__home">
            <h1>The easiest way to build your websitez</h1>
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

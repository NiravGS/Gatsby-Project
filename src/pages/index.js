import React from "react"
import Header from "../components/Elements/Header"
import HomeEle from "../components/HomePage/Home"
import Title from "../components/HomePage/HowItWorks"
import About from "../components/HomePage/About"

import "./style.scss"
const Index = () => (
  <>
    <div className="menu">
      <Header />
      <HomeEle />
    </div>
    <Title />
    <About />
  </>
)

export default Index

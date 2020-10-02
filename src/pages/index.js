import React from "react"
import Header from "../components/Elements/Header"
import HomeEle from "../components/HomePage/Home"
import Title from "../components/HomePage/HowItWorks"

import "./style.scss"
const Index = () => (
  <>
    <div className="menu">
      <Header />
      <HomeEle />
    </div>
    <Title />
  </>
)

export default Index

import React from "react"
import Layout from "../components/layout"
import About from "./about"
import Experience from "./experience"
import Greeting from "./greeting"
import Projects from "./project"
import Contact from "./contact"

const Home = () => {
  return (
    <Layout>
      <Greeting />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}
export default Home

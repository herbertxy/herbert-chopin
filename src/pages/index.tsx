import * as React from "react"
import type { HeadFC } from "gatsby"
import About from "./about"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        herbert chopin
        <br />
        <span style={headingAccentStyles}>— welcome to my site! 🎉🎉🎉</span>
        <About/>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

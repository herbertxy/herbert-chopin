import * as React from "react";
import type { HeadFC } from "gatsby";
import About from "./about";
import './style.css'
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        herbert chopin
        <br />
        <span style={headingAccentStyles}>— welcome to my site! 🎉🎉🎉</span>
      </h1>
      <About />
      <h2>Articles:</h2>
      <div>
        <h4>solve git push error because of proxy:</h4>
        <code>
          fatal: unable to access 'https://github.com' openSSL SSL_connect:
          OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
        </code>
        <h4>open a new git bash</h4>
        <code>git config --global --unset http.proxy</code><br/>
        <code>git config --global http.sslVerify false</code>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

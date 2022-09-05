import React from 'react'
import Link from "@material-ui/core/Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2>Hi, My Name is Joseph</h2>
            <div className="prompt"><p> An Aspiring software developer with a passion for learning and creating.</p>
            <Link href="https://www.linkedin.com/in/joseph-esparago-b1043517b/"><LinkedInIcon /></Link>
            <EmailIcon/>
            <Link href="https://github.com/jiesparago"><GithubIcon/></Link>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                <span> HTML, CSS, Bootstrap, ReactJS, TailwindCSS, MaterialUI</span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                <span>NodeJS, MySQL, MongoDB, PHP</span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                <span>Javascript</span>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home
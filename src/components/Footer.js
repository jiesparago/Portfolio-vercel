import React from 'react'
import Link from "@material-ui/core/Link"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <Link href="https://www.instagram.com/iamjiesparago/"><InstagramIcon/></Link>
        <Link href="https://twitter.com/jiesparago"><TwitterIcon/></Link>
        <Link href="https://www.facebook.com/joooosheeeep/"><FacebookIcon/></Link>
        <Link href="https://www.linkedin.com/in/joseph-esparago-b1043517b/"><LinkedInIcon/></Link>

        </div>
        <p> &copy; 2022 Sep</p>
    </div>
  )
}

export default Footer
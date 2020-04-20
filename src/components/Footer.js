import React from "react";
import "./Footer.scss";
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';

class Footer extends React.Component {
    render() {
        return(
            <section id="footer" className="footer">
                {/* <div className="icons">
                    <a href="https://github.com/pcramos19" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/in/pc-ramos/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
                    <a href="https://twitter.com/Mascagranzas" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
                </div> */}
               <p>Copyright © PRamos 2020</p>               
            </section>
        )
    }
}

export default Footer;
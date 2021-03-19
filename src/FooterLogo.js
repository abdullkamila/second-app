import React from 'react'
import footerlogo from "./footerlogo1.svg";
import footerlogo2 from "./footerlogo2.svg";

function FooterLogo () {
    return (
        <div>
            <img src={footerlogo} alt="logotype"/> 
            <img src={footerlogo2} alt="logotype"/> 
        </div>
    )
}
export default FooterLogo

import React from 'react'
import FooterLogo from "./FooterLogo"
import FooterMenu from "./FooterMenu"
import Copyright from "./Copyright"


function Footer () {
    return (
        <div className="footer">
            <div className="row justify-content-between">
                    <div className="col-auto">
                        <FooterLogo />
                        <FooterMenu />
                    </div>
                    <div className="col-auto"> 
                        <Copyright />
                    </div>
                </div>
            

        </div>
    )
}

export default Footer
import React from 'react'
import FooterMenu from "./FooterMenu"
import Copyright from "./Copyright"


function Footer () {
    return (
        <div className="footer">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <FooterMenu />
                </div>
                <div className="col-auto pt-1"> 
                    <Copyright />
                </div>
            </div>
        </div>
    )
}

export default Footer
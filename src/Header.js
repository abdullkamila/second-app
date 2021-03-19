import React from 'react'
import Logo from './Logo'
import Menu from "./Menu"

function Header () {
    return (
        <div className="header">
            <div className="row">
                    <div className="col-6">
                        <Logo />
                    </div>
                    <div className="col-6"> 
                        <Menu />
                    </div>
                </div>
            

        </div>
    )
}

export default Header
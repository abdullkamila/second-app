import React from 'react'
import FooterLogo from "./FooterLogo";

function FooterMenu () {
    return (
        <div className="footerMenu">
            <div className="row justify-content-end">
                <div className="col-auto">
                    <FooterLogo />
                </div>
                <div className="col-auto pt-1">
                    <a href="">Партнерам</a>
                </div>
                <div className="col-auto pt-1">
                    <a href="">Разработчикам</a>
                </div>
                <div className="col-auto pt-1">
                    <a href="">Вакансии</a>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu 
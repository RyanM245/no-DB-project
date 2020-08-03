import React from "react";
import Menu from './Menu'


const Header = () => {
    return (
        <header className = "header-container">
            <img 
            src = "https://media.discordapp.net/attachments/727541480243331142/738788661557985371/Adam_Singing.gif"
            alt = "Adam"
            className = "img-logo"/>
            <div className = "header-title"> Adam's Happy Place </div>
            <Menu className = "header-menu"/>
        </header>
    )

}

export default Header
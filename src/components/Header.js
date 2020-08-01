import React from "react";


const Header = () => {
    return (
        <header className = "header-container">
            <img 
            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-2nVGZzoFCRlfrob7aR4yzlV-agSnPZceJw&usqp=CAU"
            alt = "Adam"
            className = "img-logo"/>
            <div className = "header-title"> Adam's Happy Place </div>
            <div className = "header-menu"> Menu </div>
        </header>
    )

}

export default Header
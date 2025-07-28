import React from "react";
import "./LandingPage.css"; // we'll define animations here
import musicIcon from "./music1.png";

export default function LandingPage () {

    const heading = "Welcome to MusicMatcher";

    return(
        <>
        <div className="row w-100"> 
        <div className="inconsolata-text text-center col-md-6 mt-5">
            <h1 className="letter-fade-heading"> 
               {heading.split("").map((char,i) =>(
                <span key={i} className="fade-letter" style={{animationDelay:`${i*0.05}s`}}>
                    {char === " " ? "\u00A0" :char}
                </span>
               ))}
            </h1>
        </div>
        <div className="col-md-6 mt-5 d-flex justify-content-center">
                    <img
                     src={musicIcon}
                     alt = "Music Icon"
                     className="music-icon"/>
            </div>
            </div>
        </>
    )
}
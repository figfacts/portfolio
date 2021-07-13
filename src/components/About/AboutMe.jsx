import React from "react";
import "../../App.css";

function AboutMe() {
  return (
    <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hi, I'm <strong>David Figueroa</strong>        
        </h1>
        <p class="section__subtitle section__subtitle--intro"> a software developer</p>

        <img src="assets/images/profilepic.jpg" alt="a profile picture of David Figueroa" class="intro__img">
    </section> 

    <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">Software developer based out of DC</p>

        <div class="about-me__body">
            <p>Hi I'm David! I graduated from Virginia Commonwealth University (VCU) 2 years ago with a major in Accounting and minor in Chemistry. I am a current student at Georgia Tech, pursuing their full stack developer coding certificate. I'm big into basketball (playing & watching NBA), going to the movies, and traveling. I also try to dabble in whatever I don't know and try to learn it. Feel free to connect with me on LinkedIn or shoot me a message via email. </p>
        </div>

        <img src="./assets/images/dev-david-02.jpg" alt="David at Capital One Arena" class="about-me__img">
    </section>
);
}

export default AboutMe;
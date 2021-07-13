import React from "react";
import Card from "./Card";
import '../../App.css';
//images
import stockWatcher from '../../images/portfolio-01-Stock-Watcher-Square.PNG';
import windyWeather from '../../images/portfolio-02-WindyWeather-Square.PNG';
import sameDayScheduler from '../../images/portfolio-03-SameDayScheduler-Square.PNG';
import traderJocks from '../../images/portfolio-04-TraderJocks-Square.png';
import workoutTracker from '../../images/portfolio-05-WorkoutTracker-Screen-2-Square.png';


<div className="my-work" id="work">
<h2 className="section__title section__title--work">My work</h2>
<p className="section__subtitle section__subtitle--work">A selection of my range of work</p> </div>
<div className="portfolio">
    {/* #Portfolio item 01 */}
    <a href="./assets/projects/portfolio01StockWatcher.html" className="portfolio__item">
        <img src={stockWatcher} alt="Genesis Stock Watcher Project" className="portfolio__img">
    </a>
    
    {/* <!-- Portfolio item 02 --> */}
    <a href="./assets/projects/portfolio02WindyWeather.html" className="portfolio__item">
        <img src="./assets/images/portfolio-02-WindyWeather-Square.png" alt="Windy Weather Project" className="portfolio__img">
    </a>
    
    {/* <!-- Portfolio item 03 --> */}
    <a href="./assets/projects/portfolio03SameDayScheduler.html" className="portfolio__item">
        <img src="./assets/images/portfolio-03-SameDayScheduler-Square.PNG" alt="Same Say Scheduler Project" className="portfolio__img">
    </a>

    {/* <!-- Portfolio item 04 --> */}
    <a href="./assets/projects/portfolio04TraderJocks.html" className="portfolio__item">
        <img src="./assets/images/portfolio-04-TraderJocks-Square.png" alt="Genesis Trader Jocks Project" className="portfolio__img">
    </a>
    
    {/* <!-- Portfolio item 05 --> */}
    <a href="./assets/projects/portfolio05WorkoutTracker.html" className="portfolio__item">
        <img src="./assets/images/portfolio-05-WorkoutTracker-Screen-2-Square.png" alt="Workout Tracker Project" className="portfolio__img">
    </a>

</div>

import "./Home.css";
import jeff from "./jeff.jpeg";
import { Link } from 'react-router-dom';
import React from 'react';


function Home() {

    return (
        <div className="Home">
        <div class="row">
  <div class="column">
    <img className="Jeff" src={jeff} alt="my mug"/>
    </div>

 
  
  <div class="column">
    <h2 className="AboutMe">Greetings!</h2>
    <p className="p1">My name is Jeff Nordstrom.</p>
    <p className="p2">I'm a Certified Full-Stack Software Developer.</p>
   <Link to ="/Projects"> <button className='button'>My Projects</button></Link> <Link to="/Contact"><button className='button'>Contact Me</button></Link>
    <p className="p3">#python #mysql #reactjs #javascript #redux </p>
    <p className="p3">#css #materialui #bootstrap #github </p>
    <p className="p3">#aws #firebase #docker #flask   </p>
  </div>
</div>
</div>
    

    )
}

export default Home;


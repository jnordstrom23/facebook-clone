import "./LandingPage.css";
import jeff from "./jeff.jpeg";

function LandingPage() {
    return (
        <div className="LandingPage">
        <div class="row">
  <div class="column">
    <img className="img" src={jeff} size="small" alt="my mug"/>
    </div>

 
  
  <div class="column">
    <h2 className="AboutMe">About Me</h2>
    <p className="p1">Hello there! My name is Jeff Nordstrom.</p>
    <p className="p2">I'm a Certified Full-Stack Software Developer.</p>
  </div>
</div>
</div>
    

    )
}

export default LandingPage
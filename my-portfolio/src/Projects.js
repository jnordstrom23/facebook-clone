import "./Projects.css";
import Slideshow from './Slideshow';
import Slideshow2 from './Slideshow2';
import { Link } from 'react-router-dom';
import React from 'react';

function Projects() {
  const images = [
    require('./Burrito1.jpeg'),
    require('./Burrito2.jpeg'),
    require('./Burrito3.jpeg'),
    require('./Burrito4.jpeg'),
   
    // Add more image URLs as needed
  ];

  const images2 = [
    'https://npr.brightspotcdn.com/dims4/default/eeaa4f9/2147483647/strip/true/crop/2600x1733+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F59%2F6e%2Fdf70d0e2464ba52d0d5ece875a29%2Fgettyimages-1243628730x.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSmZsDhajs4e6ZdVQnlDlzjc9EznUpCmLww&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvx2v_pCCnOiOnbcUrNVJbym7mIMAk5134Q&s',
    // Add more image URLs as needed
  ];

  const intervalTime = 4000;


  return (
    <div className="Home">
    <div class="row">
    
    
    <div className="column">
    <h2 className="Project_Title">Restuarant App</h2>
   
      <Slideshow images={images} intervalTime={intervalTime} />
    <p className="project_info">An app for ordering burritos!</p>
    <p className="project_info">This was my final project at Whitworth University.</p>
    <p className="project_info">The Stack: React.js, Flask API, Docker, and MYSQL </p>
    <p className="project_info">GitHub: used for version control and continuous deployment </p>
    <p className="project_info">AWS: Amplify, Containers, RDS, and Domain. </p>
    <div className = "Project_Link"><Link to = "https://burrito-ordering-app-project.com/"> <button className='button'>Check it Out!</button></Link></div>

    
    
    

</div>
    <div className="column">
    <h2 className="Project_Title">Coming Soon...</h2>
    <Slideshow2 images2={images2} intervalTime={intervalTime} />
    <p className="project_info">Meanwhile, enjoy these people playing pickleball!</p>
  
</div>
</div>

</div>


)
}
  
  export default Projects;
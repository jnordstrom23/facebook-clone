import "./Projects.css";
import Slideshow from './Slideshow';
import Slideshow2 from './Slideshow2';

function Projects() {
  const images = [
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg',
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg',
    // Add more image URLs as needed
  ];

  const images2 = [
    'https://cooperpetcare.com/wp-content/uploads/2021/09/when-to-start-training-a-puppy.jpeg',
    'https://media.wired.co.uk/photos/606d9caadbc4c121710a3ea2/16:9/w_1280,c_limit/wired-uk-puppyboom.jpg',
    'https://d2zp5xs5cp8zlg.cloudfront.net/image-60567-800.jpg',
    // Add more image URLs as needed
  ];

  const intervalTime = 4000;


  return (
    <div className="Home">
    <div class="row">
    
    
    <div class="column">
    <h2 className="Project_Title">Restuarant App</h2>
      <Slideshow images={images} intervalTime={intervalTime} />
    
    

</div>



    <div class="column">
    <h2 className="Project_Title">Facebook Clone</h2>
    <Slideshow2 images2={images2} intervalTime={intervalTime} />
</div>
</div>

</div>


)
}
  
  export default Projects;
import React from 'react'
import './About.css'
import {  useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();

  function onnevigate() {
    navigate('/header');
  }
  
  return (
    <div className='about'>
      <button class="btn btn-danger" onClick={onnevigate}> Go back to home </button><br/> <br/>
      <div className='details'> 
      <img className='pic' src=" ./src/assets/Picture2.jpg"/>
      <h2> Dnyaneshwar Sawant </h2>
      <h2 className='details1'> Front End Developer</h2>
      </div>
      <h1 className='class1'> Frontend web developer with hands on knowledge of React.js </h1>
      
      <img className="aboutImg" width="100%" height="290px" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png"/>
      
      <h1 className='class2'>
        
        
         Hi, my self Dnyaneshwar Manikrao Sawant.I am from Parbhani Maharashtra.I have completed graduation in civil engineering from Nanded university.
        My intrest are in frontend web developement and i love to make beautiful and performative ui with great user experience.
        So i have recently completed frontend web developement course from Digikull institute.In this institute i learned new technologies like HTML,CSS,JS,REACT,REDUX,BOOTSTRAP,GIT etc.
        Using this technologies i worked on projects like Wether app, Thali app,Recipe search app,To do list,Movie search app etc.
        Looking for best opportunty to expand my knowledge and industry growth.
        I am capable to do a work with team.My long term goal is to explore my skills and abilities in web developement.
        <h1 className='lang'> Languages </h1>

         <h3> 1)English </h3>

         <h6> Full Professional Proficiency. </h6>

         <h3> 2)Hindi</h3>

         <h6> Native or Bilingual Proficiency. </h6>

         <h3> 3)Marathi </h3>

         <h6> Native or Bilingual Proficiency. </h6>

         <h1 className='intrest'> Intrest </h1>

         <h3> 1) Learning new technologies</h3>
         
         <h3> 2) Visiting new places</h3>

         </h1>  

        
         
    </div>
  )
}

export default About
import React from 'react'
import "./Projects.css"
import {  useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  function onnevigate() {
    navigate('/header');
  }

  return (
    <div className='projects'>

      <button class="btn btn-danger" onClick={onnevigate}> Go back to home </button><br/> <br/>

<img className='pImg' src="https://mediaprocessor.websimages.com/fit/1920x1920/unrealisation.webs.com/My%20Projects.png"/><br/> <br/>

<div className='grid'> 
<div className='one'> 

<h1 className='p'> 1) Wether app</h1> 


<h4> With the help  of this app we can search temperture ,himidity , wind speed or more details of any city.This app is very helpful for all the users. 
The Weather app includes a number of features that provide information about current and forecasted weather.
Air quality information is provided by BreezoMeter for Canada, France, Germany, India, Italy, Japan, Mexico, Netherlands, Singapore, South Korea, Spain, the United Kingdom, and the United States.
</h4>

<a href="https://dswetherapp.netlify.app/"> go to project </a>
</div>
<div className='one'> 

<h1 className='p'> 2) Thali app </h1>

<h4>  In this app we can order food from restaurant. With the help of this project it is easy
to order foods. It helpful for customer.This project is done by technologies like React js ,Redux ,Bootstrap. </h4>

<a href="https://mini-project-using-routing-and-redux-dnyanasawant.july-full-time-2022.repl.co/">go to project </a>  
</div> 
<div className='one'> 

<h1 className='p'>3)Movie searchApp </h1>
<h4> With the help of this app we can search any movie details .This project is done with the help of technologies like React js ,Bootstrap.
This React Movie Search App will be having the feature to Search the Movies from OMDB APIs.
</h4>

<a href="https://moviesearch.dnyanasawant.repl.co/"> go to project </a>
</div>
<div className='one'> 
<h1 className='p'> 4) Recipe Search App </h1>

<h4> Recipe Search and Diet API not only focuses on providing the most popular recipes but also takes diet and nutrition into consideration by providing a complete nutritional breakdown which is essential for any diet plan. 
  Some of the other benefits can be summarized. </h4>
  
  <a href="https://recipe-search.dnyanasawant.repl.co/"> go to project </a>
  </div>
  <div className='one'> 
  <h1 className='p'> 5) To do list </h1>
  <h4> In this app we can add our daily task. This app will helpful for student for preparing
their task,study planning. This app add your task with given deadline .When you write all your tasks in a list, they seem more manageable.  </h4>
<a href="https://to-do-application-dnyanasawant.july-full-time-2022.repl.co/"> go to project </a>
</div>
<img className='p1' src="https://sd.keepcalms.com/i/thank-you-for-reading-my-project-1.png"/>
</div>
    </div>
  )
}

export default Projects
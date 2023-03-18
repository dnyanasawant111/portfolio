import React from 'react'
import {  useNavigate } from 'react-router-dom';
import './Header.css'
const Header = () => {
  const navigate = useNavigate();

  function onnevigate() {
    navigate('/about');
  }
  function onnevigate1() {
    navigate('/skills');
  }
  function onnevigate2() {
    navigate('/education');
  }
  function onnevigate3() {
    navigate('/projects');
  }
  function onnevigate4() {
    navigate('/contact');
  }

  return (
    <div className='header1'> 
      <h1> My Portfolio </h1>
    <div className='header'>
    <button onClick={onnevigate}  class="btn btn-warning "> About </button> 
    {" ....."}
<button onClick={onnevigate2} class="btn btn-warning"> Education </button>
{" ....."}
<button onClick={onnevigate1}  class="btn btn-warning"> Skills</button>
{" ....."}
<button onClick={onnevigate3} class="btn btn-warning"> Projects  </button>
{"....."}
<button onClick={onnevigate4} class="btn btn-warning"> Contact  </button>

    </div>
<div className='section'> 
  <img className='img1' width="75%"  height="80%" src="https://visaguide.world/wp-content/uploads/2021/03/freelancing.jpeg"/>

<img className='img1' width="80%"  height="80%" src="https://www.trickyenough.com/wp-content/uploads/2020/08/development-scaled.jpg"/> 

</div>

<div className='footer'>
      <h1> !! @ Dnyaneshwar Sawant , Frontend web developer !!</h1>
    </div>

    </div>
  
  )
}

export default Header
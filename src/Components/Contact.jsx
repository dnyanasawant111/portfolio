import React from 'react'
import "./Contact.css"
import {  useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  function onnevigate() {
    navigate('/header');
  }

  return (
    <div className='contact'>
      <button class="btn btn-danger" onClick={onnevigate}> Go back to home </button>

      <img   width="100%" height="300px"src="https://abinteriorconstruction.com/en/contact.png"/>

      <h1> Name: Dnyaneshwar Manikrao Sawant </h1> <br/>

      <h1> <img width="60px"  height="60px" src="https://tse2.mm.bing.net/th?id=OIP.zDsa2MoFeghUwytLWnDKwwHaHa&pid=Api&P=0"/> 

        Mob:7767936454</h1><br/>
      <h1> <img width="60px"  height="60px" src="https://tse1.mm.bing.net/th?id=OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW&pid=Api&P=0"/> 

      Gmail:dnyanasawant111@gmail.com</h1><br/>
      <h1> <img width="60px"  height="60px" src="https://www.oomnitza.com/wp-content/uploads/2022/06/github-logo-300x300.png"/> 

      Github: <a href="https://github.com/dnyanasawant111"> go to github </a></h1><br/>

      <h1> <img width="60px"  height="60px" src="https://sequoiapersonnel.com/wp-content/uploads/2014/05/linkedinsquarelogo.png"/> 
      
      Linkedin: <a href="https://www.linkedin.com/in/dnyaneshwar-sawant-5b634b24b/"> go to linkedin </a></h1>
    </div>
  )
}

export default Contact
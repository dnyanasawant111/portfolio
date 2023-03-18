import React from "react";
import "./Education.css"
import {  useNavigate } from 'react-router-dom';

export default function Education (){
    const navigate = useNavigate();

    function onnevigate() {
      navigate('/header');
    }
    return(
        <div className="educ">
          
             <button class="btn btn-danger" onClick={onnevigate}> Go back to home </button> <br/> <br/>

            <img  className="eduImg" src="https://cdn-images-1.medium.com/max/1200/0*ZBcICWydFVPQVtBo.jpg"/><br/> <br/>

            
            <img className="rounded-pill" width="90px" height="90px" src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/cover1-800x390.jpg"/>
            
          <strong> Frontend web developer in 2022.  <br/> <img className='img5' src="https://vectorified.com/images/location-icon-png-transparent-5.png" /> Digikull Institute. </strong><br/> <br/>

            <img className="rounded-pill" width="90px" height="90px" src="https://w7.pngwing.com/pngs/728/858/png-transparent-academic-hat-and-diploma-illustration-bharati-vidyapeeth-university-academic-degree-masters-degree-bachelors-degree-course-bachelor-degree-cap-book-angle-comic-book-graduation-ceremony.png"/>
           
<strong> BE - Civil in 2019 with 7.84 CGPA.<br/> <img className='img5' src="https://vectorified.com/images/location-icon-png-transparent-5.png" /> S.R.T.M. University ,Nanded</strong> <br/> <br/>

<img width="90px" height="90px"  src="https://lecturewala.com/image/cache/catalog/01%20career%20point/Stickers%20New/17-500x500.png"/>
<strong>XII in 2014 with 62.77%. <br/>
<img className='img5' src="https://vectorified.com/images/location-icon-png-transparent-5.png" /> Shree Shivaji Junior College,Parbhani </strong><br/> <br/> 

<img className="rounded-pill" width="90px" height="90px"   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDnyL11JFDzix-qqzt_zoV_pRcMwrl37riJwoD5zO26s2Skq8NTzos0Tnn_nVxkXuLow&usqp=CAU"/> 
<strong> X in 2012 with 89.45%.<br/>
<img className='img5' src="https://vectorified.com/images/location-icon-png-transparent-5.png" /> Gandhi Vidhalaya ,Parbhani </strong>
        </div>
    )
}

import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";


const Hcards = () => {
   
  return (
   <div className ="d-flex CardContainer align-items-center mt-5  justify-content-center">
<div class="card">
  <div class="card-front ">
  <div className='audio'></div>
    <p class="title">Audio Books</p>
   
  </div>
  <div class="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div class="card">
  <div class="card-front ">
    <div className='story'></div>
    <p class="title">Kids Stories</p>
    {/* <p class="subtitle">Web Dev</p> */}
  </div>
  <div class="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div class="card">
  <div class="card-front ">
    <div className='language'></div>
    <p class="title">Learning Languages</p>
    {/* <p class="subtitle">Web Dev</p> */}
  </div>
  <div class="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div class="card">
  <div class="card-front ">
    <div className='podcast'></div>
    <p class="title">Podcast</p>
    {/* <p class="subtitle">Web Dev</p> */}
  </div>
  <div class="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

   </div>
  );
}

export default Hcards
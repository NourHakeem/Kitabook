import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";


const Hcards = () => {
   
  return (
   <div className ="d-flex CardContainer align-items-center mt-5  justify-content-center">
<div className="card">
  <div className="card-front ">
  <div className='audio'></div>
    <p className="title">Audio Books</p>
   
  </div>
  <div className="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className="card">
  <div className="card-front ">
    <div className='story'></div>
    <p className="title">Kids Stories</p>
    {/* <p className="subtitle">Web Dev</p> */}
  </div>
  <div className="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className="card">
  <div className="card-front ">
    <div className='language'></div>
    <p className="title">Learning Languages</p>
    {/* <p className="subtitle">Web Dev</p> */}
  </div>
  <div className="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className="card">
  <div className="card-front ">
    <div className='podcast'></div>
    <p className="title">Podcast</p>
    {/* <p className="subtitle">Web Dev</p> */}
  </div>
  <div className="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

   </div>
  );
}

export default Hcards
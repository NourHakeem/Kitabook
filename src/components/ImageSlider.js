import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import audiobook from '../images/audiobook.jpg';
import kidsstory from '../images/kidsstory.jpg';
import language from '../images/learning.jpg';
import podcast from '../images/podcast.jpg';
import '../App.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={audiobook}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>listen to your favourite Books</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kidsstory}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>listening Stories before sleeping for kids </h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={language}
          alt="First slide"
        />
     <Carousel.Caption>
          <h3>learning Languages by Audios</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={podcast}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>listening to your favourite Podcast</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
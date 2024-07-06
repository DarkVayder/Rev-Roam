import React from 'react';
import PropTypes from 'prop-types';
import './Background.css';
import video from '../../Assets/video.mp4';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.png';
import image3 from '../../Assets/image3.png';

const Background = ({ playStatus, bannerCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted playsInline>
        <source src={video} type='video/mp4' />
      </video>
    );
  }

  switch (bannerCount) {
    case 0:
      return <img src={image1} className='background' alt="Banner 1" />;
    case 1:
      return <img src={image2} className='background' alt="Banner 2" />;
    case 2:
      return <img src={image3} className='background' alt="Banner 3" />;
    default:
      return <div className='background'>Invalid banner count</div>;
  }
};

Background.propTypes = {
  playStatus: PropTypes.bool.isRequired,
  bannerCount: PropTypes.number.isRequired,
};

export default Background;

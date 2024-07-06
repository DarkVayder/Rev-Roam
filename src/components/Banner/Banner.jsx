import React from 'react';
import './Banner.css';
import play_icon from '../../Assets/play_icon.png';
import pause_icon from '../../Assets/pause_icon.png';

const Banner = ({ bannerCount, setBannerCount, BannerData, setPlayStatus, playStatus }) => {
  return (
    <div className='banner'>
      <div className="banner-text">
        <p>{BannerData.text1}</p>
        <p>{BannerData.text2}</p>
      </div>
      <div className="banner-i-play">
        <ul className='banner-p'>
          <li onClick={() => setBannerCount(0)} className={bannerCount === 0 ? 'banner-dot orange' : 'banner-dot'}></li>
          <li onClick={() => setBannerCount(1)} className={bannerCount === 1 ? 'banner-dot orange' : 'banner-dot'}></li>
          <li onClick={() => setBannerCount(2)} className={bannerCount === 2 ? 'banner-dot orange' : 'banner-dot'}></li>
        </ul>
        <div className="banner-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt='Play/Pause' />
          <p>Play Video</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

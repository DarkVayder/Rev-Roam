import React, { useEffect, useState } from 'react';
import Background from './components/Background/Background';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
const App = () => {

  const BannerData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Embrace", text2: "your passion" },
    { text1: "Give in to", text2: "your desire" }
  ];

  const [bannerCount, setBannerCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  
  useEffect(()=> {
    setInterval(()=> {
      setBannerCount((count) => {return count === 2?0:count+1})
    }, 8000)
  },[])
  
  return (
    <div>
      <Background playStatus={playStatus} bannerCount={bannerCount} />
      <Nav />
      <Banner 
      setPlayStatus={setPlayStatus}
      BannerData={BannerData[bannerCount]}
      bannerCount={bannerCount}
      setBannerCount={setBannerCount}
      playStatus={playStatus}
      />
    </div>
  );
}

export default App;

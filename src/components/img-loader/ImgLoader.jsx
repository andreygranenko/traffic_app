'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RuleImage = ({ currentPantIndex, allRules }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  console.log('rerender')
  const imageUrl = `/noteikumi/${allRules[currentPantIndex].number}${allRules[currentPantIndex].number >= 15 ? '.jpg' : '.png'}`;

  // const imageUrl = 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }
    setImageLoaded(false);
  }, [imageUrl]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {!imageLoaded && (
        <div className="skeleton h-64 w-full"></div>
      )}
      <Image
        width={2000}
        height={300}
        className={`rounded-xl object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
        src={imageUrl}
        alt="man"
        quality={20}
        onLoad={handleImageLoad}
        onError={() => setImageLoaded(true)}
      />
    </>
  );
};

export default RuleImage;

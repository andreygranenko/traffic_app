'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RuleImage = ({ currentPantIndex, allRules }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  console.log('rerender')
  const imageUrl = `/noteikumi/${allRules[currentPantIndex].number}${allRules[currentPantIndex].number >= 15 ? '.jpg' : '.png'}`;

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

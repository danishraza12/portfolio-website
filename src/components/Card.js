import React from 'react';
import profile from '../images/react-logo.jpg';
import SocialMedia from './SocialMedia';
import { TypeAnimation } from 'react-type-animation';

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-2">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-black-900">Danish Raza</p>
          <TypeAnimation
            // className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2"
            sequence={[
              'Open to work as ',
              1000, // 1s
              'Open to work as Software Engineer',
              1000,
              'Open to work as Senior Software Engineer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
          <div className="flex align-center justify-center mt-4">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

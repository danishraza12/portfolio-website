import React from 'react';
import profile from '../images/react-logo.jpg';
import SocialMedia from './SocialMedia';
import Typical from 'react-typical';

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-black-900">Danish Raza</p>

          <Typical
            className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2"
            steps={[
              ' ',
              100,
              'Associate Software Engineer',
              3000,
              'Junior Software Engineer',
              3000,
            ]}
            loop={Infinity}
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

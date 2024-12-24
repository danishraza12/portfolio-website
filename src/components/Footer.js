import React from 'react';

import SocialMedia from './SocialMedia';
import { EMAIL } from '../constants/contact';

const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <SocialMedia />
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made by{' '}
          <a
            className="text-blue-500 hover:underline"
            href={"mailto:" + EMAIL}
          >
            Danish Raza
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

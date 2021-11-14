import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <SocialMedia />
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{' '}
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>
          by{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXrlwdBPCKKrwRGBQbxqzHqlQHDllVfRkQJJMzhHWwRNHjwqSshmnvZwcfNqnkDZRkbzh"
          >
            Danish Raza
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

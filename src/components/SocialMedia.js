import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <>
      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        href="https://github.com/danishraza12"
      >
        <FaGithub />
        <span className="sr-only">Github</span>
      </a>

      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-300"
        href="https://www.linkedin.com/in/danishraza12/"
      >
        <FaLinkedin />
        <span className="sr-only">Linkedin</span>
      </a>

      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        href="https://medium.com/@danish_raza"
      >
        <BsMedium />
        <span className="sr-only">Medium</span>
      </a>

      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-800 rounded-full hover:text-white transition-colors duration-300"
        href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXrlwdBPCKKrwRGBQbxqzHqlQHDllVfRkQJJMzhHWwRNHjwqSshmnvZwcfNqnkDZRkbzh"
      >
        <FaEnvelope />
        <span className="sr-only">Github</span>
      </a>
    </>
  );
};

export default SocialMedia;

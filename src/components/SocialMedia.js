import React from 'react';
import { connect } from 'react-redux';

const SocialMedia = ({ socialMedia }) => {
  return (
    <>
      {socialMedia.map(({icon: Icon, color, key, link, name}) => (
        <a
          className={`text-xl m-1 p-1 sm:m-2 sm:p-2 text-${color} hover:bg-neutral-100 
            hover:text-2xl rounded-full hover:border-gray-700 border-transparent border-2 
            p-2 transition-all duration-300`}
          href={link} key={key}
        >
          <Icon />
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { socialMedia: state.socialMedia };
};

export default connect(mapStateToProps, {})(SocialMedia);

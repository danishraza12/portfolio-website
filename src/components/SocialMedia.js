import React from 'react';
import { connect } from 'react-redux';

const SocialMedia = ({ socialMedia }) => {
  var SocialMediaIcon;

  return (
    <>
      {socialMedia.map((app) => (
        <a
          className={`text-xl m-1 p-1 sm:m-2 sm:p-2 text-${app.color} hover:bg-${app.color} rounded-full 
            hover:text-white transition-colors duration-300`}
          href={app.link}
        >
          {(SocialMediaIcon = app.icon)}
          <SocialMediaIcon />
          <span className="sr-only">{app.name}</span>
        </a>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { socialMedia: state.socialMedia };
};

export default connect(mapStateToProps, {})(SocialMedia);

/** 
 * PurgeCSS: 
 * text-gray-800
 * text-blue-700
 * text-yellow-800
 * text-black
 * 
 
 */

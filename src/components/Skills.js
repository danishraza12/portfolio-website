import React from 'react';
import { connect } from 'react-redux';

const Skills = ({ skills }) => {
  var MyComponent;
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-center text-black sm:text-4xl pt-4 font-bold">
        Tech Stack I Use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        {skills.map((skill) => (
          <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
            {/* Dynamically rendering component from list */}
            {(MyComponent = skill.icon)}
            <MyComponent color={skill.color} className="mx-auto text-5xl" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { skills: state.skills };
};

export default connect(mapStateToProps, {})(Skills);

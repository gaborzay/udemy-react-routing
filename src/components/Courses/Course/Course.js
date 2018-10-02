import React from 'react';

const course = (props) => {
  return (
    <div className="Course">
      <h1>Math {props.match.params.cid}</h1>
      <h2>{props.location.title}</h2>
    </div>
  );
};

export default course;
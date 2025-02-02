import React from 'react';

const Scroll = (props) => {
  return (
    <div 
      style={{
        overflowY: 'scroll', 
        border: "5px solid black", 
        height: '800px',
        padding: '10px',  // Optional: adds padding to content inside the scroll
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

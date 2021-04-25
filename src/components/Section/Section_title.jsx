import React from 'react';

const Section_title  = ({children, title}) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section_title;
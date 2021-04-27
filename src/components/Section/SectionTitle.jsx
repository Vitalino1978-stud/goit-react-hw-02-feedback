import React from 'react';
import css from './Section.module.css'

const SectionTitle  = ({children, title}) => {
  return (
    <section className={css.Section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default SectionTitle;
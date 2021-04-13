import React from 'react';

export const programmingPageContent = {
  title: ['Programowanie', 'Programming'],
  description: [
    'Od 2019 roku uczę się programowania. Interesuje mnie JAM Stack (Javascript-APIs-Markup). Moją ulubioną technologią jest React.js',
    'I have been learning programming since 2019. I am interested in JAM Stack (Javascript-APIs-Markup). My favorite technology is React.js',
  ],
};

export const iconBar = () => (
  <div className="d-flex justify-content-end">
    <i className="fab fa-html5 fa-3x red-text" />
    <i className="fab fa-css3-alt fa-3x blue-text" />
    <i className="fab fa-sass fa-3x pink-text" />
    <i className="fab fa-js amber-text fa-3x" />
    <i className="fab fa-react blue-text fa-3x" />
  </div>
);

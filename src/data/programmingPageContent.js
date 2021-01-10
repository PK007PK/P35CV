import React from "react"

import { MDBIcon } from "mdbreact"

export const programmingPageContent = {
  title: ["Programowanie", "Programming"],
  description: [
    "Od 2019 roku uczę się programowania. Interesuje mnie JAM Stack (Javascript-APIs-Markup). Moją ulubioną technologią jest React.js",
    "I have been learning programming since 2019. I am interested in JAM Stack (Javascript-APIs-Markup). My favourite technology is React.js",
  ],
}

export const iconBar = () => (
  <div className="d-flex justify-content-end">
    <MDBIcon color="red" fab size="3x" icon="html5" className="mr-3 red-text" />
    <MDBIcon fab size="3x" icon="css3-alt" className="mr-3 blue-text" />
    <MDBIcon fab size="3x" icon="sass" className="mr-3 pink-text" />
    <MDBIcon fab size="3x" icon="js" className="mr-3 amber-text" />
    <MDBIcon fab size="3x" icon="react" className="blue-text" />
  </div>
)

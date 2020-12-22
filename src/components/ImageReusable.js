import React from "react"

import Img from "gatsby-image"

const Image = ({ className, source, style }) => {
  return <Img style={style} className={className} fluid={source} />
}

export default Image

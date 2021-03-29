import React, { useContext } from "react"
import Img from "gatsby-image"

import AppContext from '../AppProvider';

const Jumbo = ({
  title,
  subtitle,
  text,
  bottomBar,
  rightBox,
  style,
  imgSource,
}) => {
  const { print } = useContext(AppContext);
  const Text = text
  const RightBox = rightBox
  const BottomBar = bottomBar
  
  return (
    <div className="jumbotron" style={style}>
      <div className={print ? "container mt-2" : "container mt-5"}>
        <div
          className={
            print
              ? "row justify-content-between flex-row-reverse"
              : "row justify-content-between"
          }
          style={{ alignItems: "center" }}
        >
          <div className={print ? "col-12 col-md-7 text-left" : "col-12 col-md-7 text-right"}>
            <h1 className="h1">
              {title}
              <br />
              <span className="h3 font-weight-lighter">{subtitle}</span>
            </h1>
            {typeof text === "string" && <p className="my-4">{text}</p>}
            {typeof text === "object" ||
              (typeof text === "function" && <Text />)}
            <hr
              className=""
              style={{ width: "100%", marginInlineEnd: 0 }}
            />
            {bottomBar && <BottomBar />}
          </div>
          <div className="col-12 col-md-4 mt-4 mt-md-0">
            {(imgSource && (
              <div className="card">
                <Img className="card-img" fluid={imgSource} />
              </div>
            )) ||
              (rightBox && <RightBox />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbo

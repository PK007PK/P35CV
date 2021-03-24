import React, { useContext } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import AppContext from '../AppProvider';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact"
import AllTags from "./AllTags"

export default function CardProject({ post, className }) {
  const { pl } = useContext(AppContext)
  const {
    title,
    titleEng,
    description,
    descriptionEng,
    tags,
    showMore,
    githubRepo,
    live,
    date,
  } = post.frontmatter
  const fluid = post.frontmatter.thumbnail?.childImageSharp?.fluid

  return (
    <MDBCard className={`post-list-item mb-0 ${className}`}>
      <Image className="card-img" fluid={fluid} />
      <MDBCardBody
        className=""
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <MDBCardTitle className="">{pl ? title : titleEng}</MDBCardTitle>
        <MDBCardText className="">
          <small className="">{date}</small>
        </MDBCardText>
        <MDBCardText className="" style={{ color: "#1C2331" }}>
          {pl ? description : descriptionEng}
        </MDBCardText>
      </MDBCardBody>
      <div
        className="card-footer"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <AllTags tags={tags} />
      </div>
      <div className="card-footer blue-grey lighten-5">
        {showMore && (
          <Link
            to={post.fields.slug}
            className="btn btn-sm indigo white-text"
            itemProp="url"
          >
            <span itemProp="headline">{pl ? "Więcej" : "More"}</span>
          </Link>
        )}
        {live && (
          <MDBBtn
            href={live}
            target="_blank"
            color="indigo"
            rel="noopener noreferrer"
            className="btn btn-sm ml-0"
            itemProp="url"
          >
            Live
          </MDBBtn>
        )}
        {githubRepo && (
          <MDBBtn
            href={githubRepo}
            target="_blank"
            color="indigo"
            rel="noopener noreferrer"
            className="btn btn-sm"
            itemProp="url"
          >
            <span itemProp="headline">Github</span>
          </MDBBtn>
        )}
      </div>
    </MDBCard>
  )
}

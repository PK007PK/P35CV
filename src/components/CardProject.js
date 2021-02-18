import React, { useContext } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import { PageContext } from "../components/Layout"

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBBtn,
  MDBIcon,
} from "mdbreact"

// import { programmingPageContent, iconBar } from "../data/programmingPageContent"

export default function CardProject({
  fluid,
  title,
  titleEng,
  date,
  description,
  descriptionEng,
  showMore,
  live,
  githubRepo,
  post,
  tags,
}) {
  const { pl } = useContext(PageContext)

  const TagComponent = () => {
    let allTagsInPost = tags.split(",")
    return allTagsInPost.map((item, index) => (
      <span key={index} className="mb-1 mr-3">
        <MDBIcon
          style={{ fontSize: "0.8rem", color: "gray" }}
          size="sm"
          icon="hashtag"
        />
        <span style={{ fontSize: "0.8rem", color: "gray" }}>{item}</span>
      </span>
    ))
  }

  return (
    <MDBCard className="post-list-item mb-0">
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
        <MDBCardText className="">
          <TagComponent />
        </MDBCardText>
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
            className="btn btn-sm"
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

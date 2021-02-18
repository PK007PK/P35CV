import React, { useContext } from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import { PageContext } from "../components/Layout"

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBBtn,
} from "mdbreact"

import { programmingPageContent, iconBar } from "../data/programmingPageContent"

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
}) {
  const { pl } = useContext(PageContext)
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
        <MDBCardText className="">
          {pl ? description : descriptionEng}
        </MDBCardText>
      </MDBCardBody>
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

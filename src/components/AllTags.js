import React from "react"
import { MDBIcon } from "mdbreact"

export default function AllTags({ tags }) {
  let allTagsInPost = tags.split(",")
  return (
    <ul style={{ padding: 0 }}>
      {allTagsInPost.map((item, index) => (
        <span key={index} className="mb-1 mr-3">
          <MDBIcon style={{ fontSize: "0.8rem" }} size="sm" icon="hashtag" />
          <span style={{ fontSize: "0.8rem" }}>{item}</span>
        </span>
      ))}
    </ul>
  )
}

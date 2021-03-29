import React from "react"

export default function AllTags({ tags }) {
  let allTagsInPost = tags.split(",")
  return (
    <ul className="list-unstyled" style={{ padding: 0 }}>
      {allTagsInPost.map((item, index) => (
        <li key={index} className="mb-1 mr-3 d-inline">
         <i style={{ fontSize: "0.8rem" }} />
          <span style={{ fontSize: "0.8rem" }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

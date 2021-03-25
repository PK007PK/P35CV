// import { useStaticQuery, graphql } from "gatsby"
// import { MDBBtn } from "mdbreact"
// import React, { useContext } from "react"
// import AllTags from "./AllTags"
// import AppContext from '../AppProvider';

// export default function Excercises() {
//   const { pl } = useContext(AppContext)
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "/exercises/.*.md$/" } }
//         sort: { fields: [frontmatter___date], order: DESC }
//       ) {
//         edges {
//           node {
//             id
//             frontmatter {
//               date(formatString: "YYYY-MM-DD")
//               title
//               titleEng
//               excerciseCategory
//               description
//               descriptionEng
//               tags
//               live
//               githubRepo
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
//       {data.allMarkdownRemark.edges.map((item, index) => {
//         const {
//           title,
//           titleEng,
//           excerciseCategory,
//           description,
//           descriptionEng,
//           tags,
//           githubRepo,
//           live,
//           date,
//         } = item.node.frontmatter

//         let color
//         switch (excerciseCategory) {
//           case "demo":
//             color = `blue-grey darken-1`
//             break
//           case "boilerplate":
//             color = `grey darken-1`
//             break
//           case "excercise":
//             color = `grey darken-3`
//             break
//           default:
//             color = `stylish-color-dark`
//         }
//         // ["demo", "boilerplate", "proof of concept", "excercise", "snippet"],
//         return (
//           <li key={index}>
//             <div className={`card border-dark mb-5 text-white `.concat(color)}>
//               <div className="card-body text-dark ">
//                 <h5 className="card-title text-center text-white">
//                   {pl ? title : titleEng}
//                 </h5>
//                 <div className="card-text text-white my-3 d-flex justify-content-between">
//                   <small className="">{date}</small>
//                   <small className="">{excerciseCategory}</small>
//                 </div>
//                 <p className="card-text text-white">
//                   {pl ? description : descriptionEng}
//                 </p>
//               </div>
//               <div className="card-footer">
//                 <AllTags tags={tags} />
//               </div>
//               <div className="card-footer">
//                 {live && (
//                   <MDBBtn
//                     href={live}
//                     target="_blank"
//                     color="indigo"
//                     rel="noopener noreferrer"
//                     className="btn btn-sm ml-0"
//                     itemProp="url"
//                   >
//                     Live
//                   </MDBBtn>
//                 )}
//                 {githubRepo && (
//                   <MDBBtn
//                     href={githubRepo}
//                     target="_blank"
//                     color="indigo"
//                     rel="noopener noreferrer"
//                     className="btn btn-sm"
//                     itemProp="url"
//                   >
//                     <span itemProp="headline">Github</span>
//                   </MDBBtn>
//                 )}
//               </div>
//             </div>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

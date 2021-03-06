import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import AppContext from '../AppProvider';

import Jumbo from '../components/Jumbo';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import CardProject from '../components/CardProject';
import Excercises from '../components/Exercises';
import PortfolioCategoryFilter from '../components/PortfolioCategoryFilter';
import Pagination from '../components/Pagination';
import projectConfig from '../projectConfig';

import {
  programmingPageContent,
  iconBar,
} from '../data/programmingPageContent';
import CodeWars from '../components/CodeWars';

const ProgrammingPage = ({ data, location, pageContext }) => {
  const { pl, killPrint } = useContext(AppContext);

  if (pageContext.dirName === undefined) {
    pageContext.dirName = `/programming`;
    pageContext.pageType = 'allPaginatedPosts';
  }

  useEffect(() => {
    killPrint();
  }, []);

  const { portfolioCategory } = data;
  const { allPortfolio } = data;
  const { excercises } = data;

  let postsToDisplay;
  switch (pageContext.pageType) {
    case 'allPaginatedPosts':
      postsToDisplay = allPortfolio;
      break;
    case 'allPostsInCategory':
      postsToDisplay = portfolioCategory;
      break;
    default:
      postsToDisplay = allPortfolio;
  }

  const jumbotronImg = data.placeholderImage.childImageSharp.fluid;

  const ConfiguredJumbotron = () => (
    <Jumbo
      title="Piotr Krasny"
      subtitle={
        pl ? programmingPageContent.title[0] : programmingPageContent.title[1]
      }
      text={
        pl
          ? programmingPageContent.description[0]
          : programmingPageContent.description[1]
      }
      bottomBar={iconBar}
      style={{
        backgroundColor: '#f5f5f5',
        boxShadow: 'none',
        minHeight: '550px',
      }}
      imgSource={jumbotronImg}
    />
  );

  const DisplayProjects = () => (
    <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
      {postsToDisplay.nodes.map((post) => (
        <li key={post.fields.slug}>
          <CardProject post={post} className="mb-5" />
        </li>
      ))}
    </ul>
  );

  return (
    <Layout lang={location?.state?.lang}>
      <SEO title={pl ? 'Programowanie' : 'Programming'} />
      <ConfiguredJumbotron />

      <div className="container">
        <div className="row justify-content-between mb-5">
          <div className="col-12 col-md-7">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: '80px' }}
              id="title"
            >
              <h2 className="h3 text-center m-0">
                {pl ? 'Projekty' : 'Projects'}
              </h2>
            </div>
            <PortfolioCategoryFilter selectTargetId="title" />
            <Pagination
              className="my-2"
              pageSize={projectConfig.pagesAmountInSet}
              totalCount={postsToDisplay.totalCount}
              currentPage={pageContext.currentPage || 1}
              skip={pageContext.skip}
              base={pageContext.dirName}
              selectTargetId="title"
            />
            <DisplayProjects />
            <Pagination
              className="my-2"
              pageSize={projectConfig.pagesAmountInSet}
              totalCount={postsToDisplay.totalCount}
              currentPage={pageContext.currentPage || 1}
              skip={pageContext.skip}
              base={pageContext.dirName}
              selectTargetId="title"
            />
          </div>
          <div className="col-12 col-md-4 mt-4 mt-md-0">
            <Excercises base={excercises.edges} />
          </div>
        </div>
      </div>
      <CodeWars />
    </Layout>
  );
};

export const pageQuery = graphql`
  query pagesQuery(
    $selectPosts: String
    $skip: Int = 0
    $skipExcercises: Int = 0
    $pageSize: Int = 2
    $excerciseSize: Int = 4
  ) {
    site {
      siteMetadata {
        title
      }
    }
    placeholderImage: file(relativePath: { eq: "pkinf1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allPortfolio: allMarkdownRemark(
      limit: $pageSize
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/portfolioProjects/" } }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          titleEng
          description
          descriptionEng
          tags
          showMore
          live
          githubRepo
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    portfolioCategory: allMarkdownRemark(
      limit: $pageSize
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/portfolioProjects/" }
        frontmatter: { portfolioCategory: { regex: $selectPosts } }
      }
    ) {
      totalCount
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          titleEng
          description
          descriptionEng
          tags
          showMore
          live
          githubRepo
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    excercises: allMarkdownRemark(
      limit: $excerciseSize
      skip: $skipExcercises
      filter: { fileAbsolutePath: { regex: "/exercises/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            titleEng
            excerciseCategory
            description
            descriptionEng
            tags
            live
            githubRepo
          }
        }
      }
    }
  }
`;

export default ProgrammingPage;

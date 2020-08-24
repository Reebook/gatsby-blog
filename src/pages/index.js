import React from "react"
import Header from "../components/header"
import { graphql, Link } from "gatsby"

const Home = ({data}) => {
  const {edges} = data.allMarkdownRemark
  return(
    <div>
      <Header/>
      {
        edges.map(edge => {
          const {frontmatter} = edge.node
          return(
            <div key={frontmatter.path}
                style={{marginBotton: '1rem'}}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
                </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export const query = graphql`
  query HomepageQuery{
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ){
      edges{
        node{
          frontmatter{
            title
            path
            date
          }
        }
      }
    }
  }`

  export default Home

// const Layout = () => {
//   return (

//   )
// }

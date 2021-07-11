import React from "react"
import "../pages/styles.scss"
import Header from "../components/header"
import { graphql, Link } from "gatsby"

const Blog  = ({data}) => {
    const {edges} = data.allMarkdownRemark
    return (
        <div>        
           <Header/>
      <br/>
<h2 className="has-text-centered has-text-weight-bold">Posts</h2>
<br/>
        {
            edges.map(edge => {
            const {frontmatter} = edge.node
            return(
                <div className="has-text-weight-bold has-text-centered" key={frontmatter.path}
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
  query BlogQuery{
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

export default Blog
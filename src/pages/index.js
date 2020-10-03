import React from "react"
import Header from "../components/header"
import Principal from "../pages/principal"
import { graphql, Link } from "gatsby"
import "../pages/styles.scss"

const Home = ({data}) => {
  const {edges} = data.allMarkdownRemark
  return(
    <div>
      <Header/>
      <div className="container">
      <Principal/>
      <h3 className="has-text-centered has-text-weight-bold">
        Última entrada
      </h3>
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
      
    </div>
  )
}

export const query = graphql`
  query HomepageQuery{
    allMarkdownRemark(
      limit:1
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

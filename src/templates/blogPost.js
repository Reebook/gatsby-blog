import React from 'react'
import {graphql, Link} from 'gatsby'
import Header from "../components/header"

const Template = ({data, pageContext}) =>{
    const {next, prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div>
            <Header/>        
        <div className="container">
            <h2 className="has-text-centered is-size-1-mobile is-size-4 has-text-weight-bold">{title}</h2>
            <div className='blogpost'
            dangerouslySetInnerHTML={{__html:html}}/>

            {next &&
             <Link to={next.frontmatter.path}>
                 Next 
             </Link>}
             
            {prev &&
            <Link to={prev.frontmatter.path}>
                | Prev
            </Link>
             }
        </div>
        </div>
    )
}

export const query = graphql`
    query($pathSlug: String!){
        markdownRemark(frontmatter:{
            path: {eq: $pathSlug}
        }){
            html
            frontmatter{
                title
            }
        }
    }
`

export default Template
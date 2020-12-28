import React from 'react'
import {graphql, Link} from 'gatsby'
import Header from "../components/header"
import Image from '../components/Image';
// import Img from "gatsby-image"
    const Template = ({data,image, pageContext}) =>{
        const {next, prev} = pageContext
        const {markdownRemark} = data
        const title = markdownRemark.frontmatter.title
        const html = markdownRemark.html
        const featuredImgFluid = markdownRemark.frontmatter.featuredImage
        
        return (
            <div>
                <Header/>        
            <div className="container">
                <div className="column">
                <div className="column is-8 is-offset-2">
                <figure className="image">
                 {featuredImgFluid !== undefined ?
                    <Image
                    src={featuredImgFluid}
                    className="mx-auto shadow-xl"
                    alt="Sunset Image"               
                /> : ""}
                </figure >
                </div>
                <div className="column is-8 is-offset-2">
                <h1 className="title">{title} </h1>
                
                
                
                <div className='blogpost'
                dangerouslySetInnerHTML={{__html:html}}/>
                
                </div>
                {prev &&
                <Link to={prev.frontmatter.path}>
                    Prev |
                </Link>
                }
                {next &&
                <Link to={next.frontmatter.path}>
                    Next 
                </Link>}
                
             
            </div>
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
                featuredImage
            }
        }
    }`

export default Template
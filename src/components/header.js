import React from "react"
import { StaticQuery, graphql,Link } from "gatsby"

const TitleAndDescription = ({data}) => {
    // const title = data.site.siteMetadata.title
    // const description = data.site.siteMetadata.description

    return (
        <div className="hero-head">
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar" role="navigation" aria-label="main navigation">
                    <Link className="navbar-item" to={'/'}>
                    INICIO
                    </Link>
                    <Link className="navbar-item" to={'/blog'}>
                    BLOG
                    </Link>
                </div>
            </div>
        
{/* 
            <h2 style={{marginBottom: 0}}>{title}</h2>
            <p style={{
                marginTop:0,
                opacity:0.5
            }}></p> */}
                  
            
        </div>
        </nav>
        </div>
    )
}

    const Header  = () => {
        return (
            <StaticQuery
                query={graphql` 
                    query {
                        site{
                            siteMetadata {
                                title
                                description
                            }
                        }
                    }`}
                    render= {data => <TitleAndDescription data={data}/>}
                    />
        )
    }

  


export default Header

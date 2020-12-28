import React from "react"
import { StaticQuery, graphql,Link } from "gatsby"

const TitleAndDescription = () => {
    // const title = data.site.siteMetadata.title
    // const description = data.site.siteMetadata.description

    return (
        <div className="hero-head">
        <nav className="navbar">
        
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span ></span>
          <span ></span>
          <span ></span>
        </span>
        <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar tabs">
                    <ul>
                        <li>
                    <Link className="navbar-item has-text-weight-semibold" to={'/'}>
                        INICIO
                    </Link>
                    </li>
                    <li>
                    <Link className="navbar-item has-text-weight-semibold" to={'/about'}>
                        ABOUT
                    </Link>
                    </li>
                    <li>
                    <Link className="navbar-item has-text-weight-semibold" to={'/blog'}>
                        BLOG
                    </Link>
                    </li>
                    </ul>
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

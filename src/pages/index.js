import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import { runFacebookJs, runTwitterJs } from '../utils/social-buttons'
import { styles } from '../kajmagnus-styles';


class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    runFacebookJs();
    runTwitterJs();
    setTimeout(() => { this.setState({ showSocial: true })}, 2000);
  }

  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts.forEach(post => {
      if (post.node.path !== '/404/') {
        const title = get(post, 'node.frontmatter.title') || post.node.path
        pageLinks.push(
          <li
            key={post.node.frontmatter.path}
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
          <style>{styles}</style>
          <script src="https://apis.google.com/js/platform.js" async defer/>
        </Helmet>
				{/* [NOFBTWTR]
        <div id="fb-root"/> */}
        <Bio />
				{/* [NOFBTWTR]
        <div style={{ minHeight: 60, visibility: this.state.showSocial ? 'visible' : 'hidden' }}>
          <a href="https://twitter.com/share" className="twitter-share-button" data-show-count="false">Tweet</a>
          <div className="google-plus"><div className="g-plusone" data-size="medium"/></div>
          <div className="fb-like" data-href="https://www.kajmagnus.blog/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" />
        </div> */}
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

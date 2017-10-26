import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Bio from '../components/Bio'
import EffectiveDiscussionsCommentsIframe from 'gatsby-plugin-ed-comments'
import { rhythm, scale } from '../utils/typography'
import { runFacebookJs, runTwitterJs } from '../utils/social-buttons'
import { styles } from '../kajmagnus-styles';


class BlogPostTemplate extends React.Component {
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
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const blogPostUrl = 'https://www.kajmagnus.blog' + post.frontmatter.path;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <style>{styles}</style>
          <script src="https://apis.google.com/js/platform.js" async defer/>
        </Helmet>
        <h1>
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1/2),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <div style={{ minHeight: 60, visibility: this.state.showSocial ? 'visible' : 'hidden' }}>
          <a href="https://twitter.com/share" className="twitter-share-button" data-show-count="true">Tweet</a>
          <div className="google-plus"><div className="g-plusone" data-size="medium"/></div>
          <div className="fb-like" data-href={blogPostUrl} data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" />
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ marginBottom: rhythm(1) }} />
        <Bio />

        <div style={{ minHeight: 60, visibility: this.state.showSocial ? 'visible' : 'hidden' }}>
          <a href="https://twitter.com/share" className="twitter-share-button" data-show-count="true">Tweet</a>
          <div className="google-plus"><div className="g-plusone" data-size="medium"/></div>
          <div className="fb-like" data-href={blogPostUrl} data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true" />
        </div>

        <EffectiveDiscussionsCommentsIframe discussionId={post.frontmatter.discussionId} edPageId={post.frontmatter.edPageId} />
      </div>
    )
  }
}

/* <hr/>
  <script type="application/javascript" src='http://192.168.0.106:1337/vorlon.js'/>
  <div>PROPS: { JSON.stringify(this.props) }</div>
  <hr/>
  */

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        discussionId
        edPageId
        path
      }
    }
  }
`

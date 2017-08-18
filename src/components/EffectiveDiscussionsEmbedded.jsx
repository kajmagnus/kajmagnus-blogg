/** Copyright (c) 2017 Kaj Magnus Lindberg. License: MIT (this file). */

import React, { Component } from "react";


let scriptTagAdded = false;

function addScriptTagOnce() {
  if (scriptTagAdded)
    return;

  const scriptElem = document.createElement('script');
  const headOrBodyElem =
      document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

  scriptElem.async = true;
  scriptElem.type = 'text/javascript';
  scriptElem.src = 'https://kajmagnus-blog.effectivediscussions.org/-/ed-comments.min.js';
  // scriptElem.src = 'http://site-3.localhost/-/ed-comments.js';

  headOrBodyElem.appendChild(scriptElem);
  scriptTagAdded = true;
}


class EffectiveDiscussionsEmbedded extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    addScriptTagOnce()
  }

  render() {
    return (
      <div className='ed-comments' data-discussion-id='test-discussion-001'>
        <noscript>Please enable Javascript to view comments.</noscript>
        <p style={{ marginTop: 25, opacity: 0.9, fontSize: '96%' }}>
          Comments powered by <a href='https://www.effectivediscussions.org'>Effective Discussions</a>.
        </p>
      </div>);
  }

}

export default EffectiveDiscussionsEmbedded;

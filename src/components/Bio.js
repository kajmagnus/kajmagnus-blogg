import React from 'react'

// Import typefaces — no, as of 2018-12-27 they are suddenly gone, for no reason.
// Results in:
// Bio.js?260a:4 Uncaught Error: Cannot find module "typeface-montserrat"
//    at Bio.js?260a:4
//    at Object../src/components/Bio.js (Bio.js?260a:4)
//    at t (bootstrap 349963b52eadb13bedbd:52)
//import 'typeface-montserrat'
//import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(5 / 4),
        }}
      >
       <img
          src={profilePic}
          alt={`Magnus Lindberg`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by me, <strong>Magnus Lindberg</strong>. I live in Stockholm / Europe / nearby.
        Email: kajmagnus3 at gmail dot com, Twitter:{' '}
        <a href="https://twitter.com/kajmagnus3">@kajmagnus3</a>.
      </p>
    )
  }
}

export default Bio

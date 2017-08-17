---
title: New embedded comments for static sites
date: "2017-08-15T22:40:32.169Z"
path: "/new-embedded-comments/"
discussionId: "new-embedded-comments-2017-08-15"
---

Here's an new embedded comments system, open source & track-free & with novel ideas, which adds discussions to your static website or WordPress blog. Scroll down and have a look. (This is a static site, built with Gatsby, hosted at Netlify, and with the new embedded comments system.)

Unique benefits:

- **Easy to write good looking comments** because of a full-screen-width Markdown editor, with live preview. Click Reply below and have a look.

- **Easy to read:** Mitigates [the problem that deeply nested comments can become too narrow], via a trick.
And easy to find the parent comment even if it's far away, read it, jump back, and continue reading.

- **Better at finding the interesting stuff** and showing it first. Because takes into account that the topmost comments get most upvotes, since everyone sees them (but might not scroll down and look at comments below). (Work in progress.)

- **You'll see what people disagree about** (if anything).

- **You can move boring comments to the bottom.** For example well-intended but not-so-interesting comments like "I agree" and "Me too".

- **Looks nice**. Does it?

It's [open source](https://www.effectivediscussions.org/), as mentioned. I have in mind to provide embedded comments hosting, for like $2 per month (+ bandwidth costs maybe). And I'll write install-on-your-own-server instructions, if people want to try this ...

...  Well do you want to try this? For your blog / website? Be prepared to maybe update your html and scripts a few times, and reporting some problems, before everything stabilizes. Tell me, e.g. via email or Twitter, see below.
 
 
<!-- (and, if you want to, include a link to your website / blog :- ))

<! -
Actually you can try it right now — just insert the following html `<div>` placeholder and `<script>` tag somewhere.

```html
<div className="ed-comments" data-discussion-id="test-001">
  <noscript>Please enable Javascript to view comments.</noscript>
  <p style="marginTop: 25px; opacity: 0.9; fontSize: 96%">
  Comments powered by <a href="https://www.effectivediscussions.org">Effective Discussions</a>.
  </p>
</div>
<script async src="https://embedded-comments-test.ed.community/-/ed-comments.js"></script>
```

Here's a Gatsby component that does this for you, in case you use Gatsby.
But I haven't yet broken it out to its own Node.js package.
-->


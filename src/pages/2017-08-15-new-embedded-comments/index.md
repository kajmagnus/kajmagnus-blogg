---
title: New embedded comments for static sites
date: "2017-08-18T22:40:32.169Z"
path: "/new-embedded-comments/"
discussionId: "new-embedded-comments-2017-test"
---

Here's an new embedded comments system, open source & track-free & with novel ideas, which adds discussions to your static website, or WordPress / whatever blog. Scroll down and have a look. (This is a static site, built with Gatsby, hosted at Netlify, and with the new embedded comments system.)

Unique benefits:

- **Easy to write good looking comments,** because of a full-screen-width Markdown editor, with live preview. Click Reply below and have a look.

- **Interesting to read,** because is better at finding the interesting stuff, and showing it first:
Takes into account that the topmost comments get most upvotes
(since everyone sees them — but people might not scroll down and look at comments below).
Work in progress.
And you can manually move comments to the bottom, e.g. not-so-very-interesting comments like "I agree" and "Me too".

- **Easy to read:**
Easy to find the parent comment even if it's far away, read it, jump back, and continue reading.
And mitigates [the problem that deeply nested comments can become too narrow], via a trick.

- **You'll see what people disagree about** (if anything).

- **Looks nice**. Does it?

[Source code here](https://www.effectivediscussions.org/) but not much point in having a look right now; I first should finish writing installation instructions. And I can provide embedded comments hosting, for like $2 per month (so you won't need to maintain any server yourself).

Ok so what do you think and do you want to try this?
For your blog / website? Be prepared to maybe update your html a few times, and to report some problems, before everything stabilizes.
Message me e.g. via email or Twitter, see below. Or post a comment here :- )
Test comments like "testing testing 123" are welcome too.

<!--
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


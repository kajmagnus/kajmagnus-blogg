---
title: New embedded comments for static sites
date: "2017-08-18T22:40:32.169Z"
path: "/new-embedded-comments/"
discussionId: "test-discussion-002"
---

Here's an new embedded comments system, open source & track-free & with some novel ideas, which adds discussions to your static website, or WordPress / whatever blog. Scroll down and have a look. (This is a static site, built with Gatsby, hosted at Netlify, and with that new embedded comments system.)

Benefits and unique features:

- **Easy to write good looking comments,** because of a full screen width Markdown editor, with live preview. Click Reply below and have a look.

- **Interesting to read,** because is better at finding the interesting stuff, and showing it first:
Takes into account that the topmost comments get most upvotes
(since everyone sees them, but people might not scroll down and look at comments below).
Work in progress.
You can also manually move comments to the bottom, e.g. not-so-very-interesting comments like "I agree" and "Me too", to give your site visitors a better reading experience. There's a Disagree button, so people can show for each other what stuff they don't agree with.

- **Easy to read:**
Easy to find the parent comment even if it's far away, read it, jump back, and continue reading.
And mitigates [the problem that deeply nested comments becomes too narrow], via a trick.

- **Looks nice**. Does it?

[Source code here](https://www.effectivediscussions.org/) but not much point in having a look right now; I first should finish writing installation instructions.
There're moderation tools, spam filtering and rate limits.
Works on mobile (well at least on my mobile) but currently might take some seconds to load
(3 & 4 years old Android & iPhone 5S).
I can provide embedded comments hosting if you don't want to maintain a server yourself.
There's forum software too, where everyone can use the same logins and accounts.

Feel free to scroll down & have a look, and post test comments e.g. "test test 123",
and give me feedback.
Want to use this, for your blog / website?
Be prepared to maybe update your html a few times, and to report problems,
before everything stabilizes.
Message me e.g. via email or Twitter, see below, or post a comment here :- )

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


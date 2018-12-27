---
title: New embedded comments for static sites
date: "2017-09-13T14:00:00.000Z"
path: "/new-embedded-comments"
discussionId: "new-embedded-comments-2017"
---

Here's an new blog comments system, open source, no ads, no tracking, and with new ideas.
Scroll down and have a look — this is a static site, built with Gatsby, with those new blog comments.
The name is <strike>currently "EffectiveDiscussions"</strike> Talkyard.

Benefits and features:

- **Easy to write good looking comments,** because of a full screen width Markdown editor, with live preview. Click Reply below and have a look.

- **Interesting to read,** because finds the interesting comments, and shows them at the top.
Takes into account that the topmost comments get most upvotes
(since everyone sees them and can upvote, but people might not scroll down and look at comments below).
Work in progress.
You can manually move comments to the bottom, e.g. uninteresting comments like "I agree" and "Me too", to give your visitors a better reading experience.  There's a Disagree button, so people can show for each other what things they don't agree with.

- **Easy to read:**
Easy to find the parent comment even if it's far away, read it, jump back, and continue reading.
And mitigates [the problem that deeply nested comments becomes too narrow], via a trick.

- **Light-wegith**. Loads only a 150kb Javascript bundle on page load
— that's half the size of Mozilla Talk (300kb),
and 1/4 the size of Disqus
<small>(> 600kb, it seems to me when I sum the sizes of Disqus scripts in Chrome Dev Tools network panel on a blog that uses Disqus).</small>
<!-- The disqus page: http://goingconcern.com/accounting-firm-offices-nap-rooms-hoteling/#disqus_thread
 open dev tools, netw panel, reload, search for "disqus" scripts, sum -->

- **Looks nice**. Does it?

[Source code here](https://github.com/debiki/talkyard).

There're moderation tools, spam filtering and rate limits. Gmail and FB login.
Works on mobile (well at least on my mobiles: an old Android and an iPhone 5S).
I can provide embedded comments hosting if you don't want to maintain a server yourself.
**There's forum software too** (see source code link above),
where everyone can reuse their embedded-comments logins and accounts.

Feel free to scroll down & have a look, and post test comments, or serious comments,
and give feedback.
Do you maybe want to try this for your blog / website?
Be prepared to update your html a few times, and to report problems,
before everything stabilizes.
Message me e.g. via email or Twitter, see below, or post a comment in [the support forum](https://www.talkyard.io/forum/latest/support) (which is mostly empty,
maybe because I haven't really started marketing this yet), or in the comments below :- )

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


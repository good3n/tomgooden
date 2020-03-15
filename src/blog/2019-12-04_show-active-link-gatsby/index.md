---
title: 'Show Active Link with Gastby'
path: '/blog/show-active-link-gatsby/'
description: 'Gatsby-link has built-in functionality that allows you to add an active class or state to your current page.'
date: '2019-12-04'
featuredImage: './active-class-gatsby-link.png'
author: 'Tom Gooden'
tags: ['gatsby', 'react']
---

Before you go all crazy throwing together a quick JavaScript snippet for adding an active class name to the links in your navigation, take a moment to look further into the [Gatsby Link API](https://www.gatsbyjs.org/docs/gatsby-link/).

Using `activeClassName` will add a class name to the Link when it's active. Alternatively you can use `activeStyle` which is just a style object that is applied when the current link is active.

```jsx
import React from 'react'
import { Link } from 'gatsby'

const MainNav = () => (
  <nav>
    {/* using activeClassName */}
    <Link to="/" activeClassName="is-active">
      Home
    </Link>

    {/* using activeStyle */}
    <Link to="/contact/" activeStyle={{ color: `purple` }}>
      Contact
    </Link>
  </nav>
)
```

### It's really that simple.

You're also able to use `partiallyActive`, which allows you to partally match the current URL. e.g. `/blog/funky-post-name/`

```jsx
import React from 'react'
import { Link } from 'gatsby'

const MainNav = () => (
  <nav>
    <Link to="/blog/" activeStyle={{ color: `purple` }} partiallyActive={true}>
      Blog
    </Link>
  </nav>
)
```

---
title: "Use Reach Router to get the location prop in Gatsby"
path: "/blog/reach-router-location-prop-gatsby/"
description: "In Gatsby you only have access to the location from page components. However with Reach Router we can get it anywhere."
date: "2020-03-04"
featuredImage: "./reach-router-location-prop-gatsby.png"
author: "Tom Gooden"
tags: ["gatsby", "react"]
---

In Gatsby, generally you only have access to the `location` prop when you're inside of a page (a route component in Gatsby's case). But in some cases, there is need for it in a functional component. Just as you begin to sweat over the idea of changing the hierarchy of your entire application, some kind fellow in Discord shoots you some resources to [@reach/router](https://reach.tech/router/), the routing library Gatsby uses.

## @react/router example in Gatsby with some goodies

```jsx
import React from "react"
import { Location } from "@reach/router"
import { SomeChildComponent } from "./SomeChildComponent"

const SomeComponent = () => (
  <Location>
    {({ location }) => {
      const { pathname, search } = location
      return (
        <header className={`${pathname ? "sticky" : ""}`}>
          <SomeChildComponent params={search} />
        </header>
      )
    }}
  </Location>
)

export default SomeComponent
```

In the above example, we've destructured the `location` prop, and used the `pathname` and `search` _(Which is basically just url parameters)_. Then used a ternary operator operator on the `header` element, and conditionally added a sticky class based on if we were on the index `/` page or not.

Being React, we can also pass the props down to child components. _(As in the example above "SomeChildComponent")_

```jsx
import React from "react"
import { Link } from "gatsby"

const SomeChildComponent = props => {
  return (
    <Link to={props.params ? `/${props.params}` : `/`} className="back">
      Back
    </Link>
  )
}

export default SomeChildComponent
```

You can view more ~~boring~~ mildly interesting information on @reach/router and how it works with Gatsby link from these links:

https://www.gatsbyjs.org/docs/reach-router-and-gatsby/  
https://www.gatsbyjs.org/docs/gatsby-link/  
https://reach.tech/router/
https://reach.tech/router/api/Location

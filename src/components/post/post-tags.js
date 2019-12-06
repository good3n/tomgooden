import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Tags = styled.div`
  margin-top: 5px;

  a {
    font-size: 14px;
    font-weight: 500;
    padding: 3px 7px;
    margin-right: 3px;
    border-radius: 3px;
    position: relative;
    transition: transform 0.2s ease;

    @media (max-width: 899px) {
      margin-bottom: 3px;
    }

    @media (min-width: 900px) {
      &:hover {
        transform: scale(1.05);
        z-index: 1;
      }
    }

    &::before {
      display: none;
    }

    &.tag- {
      &wordpress {
        background: #00b8ff;
        color: #fff;
      }

      &advancedcustomfields {
        background: #69E4BB;
      }

      &php {
        background: #001eff;
        color: #fff;
      }

      &gatsby {
        background: #bd00ff;
        color: #fff;
      }
    }
  }
`

const PostTags = ({ tags }) => (
  <Tags className={`is-sans`}>
    {(tags).map(tag => (
      <Link to={`/tags/${tag}/`} className={`tag-${tag}`}>#{tag}</Link>
    ))}
  </Tags>
)

export default PostTags

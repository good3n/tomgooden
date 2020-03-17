import styled from 'styled-components'

export const Nav = styled.nav`
  display: block;
  font-size: 18px;
  font-family: var(--font_heading);
  margin-left: auto;

  @media (max-width: 899px) {
    order: 3;
    margin-left: 20px;
  }

  &.active {
    @media (min-width: 900px) {
      display: block !important;
    }

    ul {
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.95);
      z-index: 998;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      li {
        display: block;
        margin: 0;
        font-size: 50px;
      }

      a {
        color: #fff;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;

    @media (min-width: 900px) {
      display: block !important;
    }

    @media (max-width: 899px) {
      display: none;
    }
  }

  li {
    display: inline-block;
    margin: 0 60px 0 0;

    @media (min-width: 900px) {
      a.is-active {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: -10px;
          left: -10px;
          height: 4px;
          background: #88ddff;
        }
      }

      &:nth-of-type(1) a.is-active::after {
        background: #0cafcf;
      }

      &:nth-of-type(2) a.is-active::after {
        background: #e11d92;
      }

      &:nth-of-type(3) a.is-active::after {
        background: #f06b70;
      }

      &:nth-of-type(4) a.is-active::after {
        background: #1d5db2;
      }
    }
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.theme.colors.bodyText};
    display: block;
  }
`

export const NavToggle = styled.button`
  display: none;
  overflow: visible;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  outline: none;
  background-color: transparent;
  position: relative;
  z-index: 999;

  @media (max-width: 899px) {
    display: block;
  }

  .toggle-box {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 24px;
  }

  .toggle-inner {
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    /* width: 35px; */
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #000;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 75ms;
    background-color: ${props => props.theme.colors.headingText};

    &::before,
    &::after {
      position: absolute;
      width: 35px;
      height: 4px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
      border-radius: 4px;
      background-color: ${props => props.theme.colors.headingText};
    }

    &::before {
      content: '';
      display: block;
      top: -10px;
      transition: top 75ms ease 0.12s, opacity 75ms ease;
    }

    &::after {
      content: '';
      display: block;
      bottom: -10px;
      transition: bottom 75ms ease 0.12s,
        transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.active .toggle-inner {
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(45deg);
    background-color: #fff;

    &::before {
      top: 0;
      transition: top 75ms ease, opacity 75ms ease 0.12s;
      opacity: 0;
      background-color: #fff;
    }

    &::after {
      bottom: 0;
      transition: bottom 75ms ease,
        transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
      transform: rotate(-90deg);
      background-color: #fff;
    }
  }
`

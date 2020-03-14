import styled from "styled-components"

export const Nav = styled.nav`
  display: block;
  justify-self: end;
  font-size: 18px;

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
        color: #fff
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
    margin: 0 0 0 60px;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: #121212;
    display: block;

    @media (min-width: 900px) {

      &.is-active {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          right: -10px;
          left: -10px;
          height: 4px;
          background: #88ddff;
          z-index: -1;
        }
      }
    }
  }
`

export const NavToggle = styled.button`
  display: none;
  overflow: visible;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: .15s;
  transition-property: opacity,filter;
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
    transition-duration: .15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #000;
    transition-timing-function: cubic-bezier(.55,.055,.675,.19);
    transition-duration: 75ms;

    &::before,
    &::after {
      position: absolute;
      width: 35px;
      height: 4px;
      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
      border-radius: 4px;
      background-color: #121212;
    }

    &::before {
      content: "";
      display: block;
      top: -10px;
      transition: top 75ms ease .12s,opacity 75ms ease;
    }

    &::after {
      content: "";
      display: block;
      bottom: -10px;
      transition: bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19);
    }
  }

  &.active .toggle-inner {
    transition-delay: .12s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    transform: rotate(45deg);
    background-color: #fff;

    &::before {
      top: 0;
      transition: top 75ms ease,opacity 75ms ease .12s;
      opacity: 0;
      background-color: #fff;
    }

    &::after {
      bottom: 0;
      transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
      transform: rotate(-90deg);
      background-color: #fff;
    }
  }
`
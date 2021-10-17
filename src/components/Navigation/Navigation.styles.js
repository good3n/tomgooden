import styled from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  right: 30px;
  text-align: right;
  opacity: 0;
  visibility: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px 0;
  border-radius: 20px 0 20px 20px;
  background: #f9f3f6;
  font-weight: bold;
  transition: 0.2s ease-in-out top, 0.2s ease-in-out opacity,
    0.2s ease-in-out visibility;
  font-size: var(--font-size__base--sm);

  &.true {
    opacity: 1;
    visibility: visible;
    top: 3rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    margin: 0;
  }

  a {
    display: block;
    padding: 5px 50px;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &.is-active {
      position: relative;
    }
  }
`

export const NavToggle = styled.div`
  position: relative;
  z-index: 1;
  height: 23px;
  width: 30px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    div {
      width: 30px;

      &::before {
        width: 20px;
      }

      &::after {
        width: 25px;
      }
    }
  }

  div {
    position: absolute;
    background: #000;
    height: 3px;
    width: 25px;
    transition: width 0.2s ease-in-out;
    top: 0;
    right: 0;
    border-radius: 1.5px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      background: #000;
      height: 3px;
      display: block;
      transition: width 0.2s ease-in-out;
      border-radius: 1.5px;
    }

    &::before {
      top: 10px;
      width: 30px;
    }

    &::after {
      top: 20px;
      width: 20px;
    }
  }
`

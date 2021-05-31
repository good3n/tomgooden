import styled from 'styled-components'

export const Nav = styled.nav`
  margin-left: auto;
  font-weight: 600;
  font-size: 0.9rem;

  @media (max-width: 899px) {
    order: 3;
    margin-left: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    flex-direction: row;

    @media (min-width: 900px) {
      display: flex !important;
    }

    @media (max-width: 899px) {
      display: none;
      position: fixed;
      right: 20px;
      bottom: 90px;
      background: var(--color_heading-text);
      z-index: 998;
      text-align: right;
      padding: 20px 30px 20px 80px;
      font-size: var(--font-size__h4);
      border-radius: 30px 30px 0 30px;

      &.true {
        display: block;
      }
    }
  }

  li {
    display: block;
    margin: 0 40px 0 0;

    @media (max-width: 899px) {
      margin: 5px 0;
    }
  }

  a {
    color: var(--color_heading-text);

    @media (max-width: 899px) {
      color: #fff;
      padding: 7px 0;
      display: block;

      &.is-active {
        position: relative;

        &::after {
          content: '';
          width: 5px;
          height: 100%;
          background-color: red;
          position: absolute;
          top: 0;
          right: -30px;
        }

        &::before {
          content: '';
          width: calc(100% + 110px);
          height: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          position: absolute;
          top: 0;
          left: -80px;
          z-index: -1;
        }
      }
    }
  }
`

export const NavToggle = styled.button`
  display: none;
  background: var(--color_heading-text);
  border: none;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  cursor: pointer;
  font-size: var(--font-size__base);
  outline: 0;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  padding: 0;

  &.true {
    background: var(--color_red);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 899px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

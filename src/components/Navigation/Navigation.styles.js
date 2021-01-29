import styled from 'styled-components'

export const Nav = styled.nav`
  margin-left: auto;
  font-weight: 600;
  font-size: var(--font-size__small);

  @media (max-width: 899px) {
    order: 3;
    margin-left: 20px;
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
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 23, 31, 0.95);
      z-index: 999;
      text-align: center;
      padding: 60px;
      font-size: var(--font-size__h3);

      &.true {
        display: block;
      }
    }
  }

  li {
    display: block;
    margin: 0 40px 0 0;

    @media (max-width: 899px) {
      margin: 0 0 20px;
    }
  }

  a {
    color: ${props => props.theme.colors.headingText};

    @media (max-width: 899px) {
      color: #fff;
    }
  }
`

export const NavToggle = styled.button`
  display: none;
  background: var(--color_red);
  border: none;
  padding: 10px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  font-size: var(--font-size__base);
  outline: 0;

  &.in-nav {
    position: absolute;
    top: 50px;
    right: 50px;

    @media (max-width: 600px) {
      top: 30px;
      right: 30px;
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 899px) {
    display: block;
  }
`

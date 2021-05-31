import styled from 'styled-components'

export const StyledCta = styled.div`
  text-align: center;
  padding: 110px 0 60px;

  @media (max-width: 600px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  h2 {
    margin: 0 0 2rem;

    span {
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        height: 10px;
        width: 100%;
        position: absolute;
        bottom: 5px;
        right: 0;
        left: 0;
        background-color: var(--color_yellow);
        z-index: -1;
      }
    }
  }

  .card {
    display: inline-block;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: var(--font-size__small);
    background-color: var(--color_red);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;

    &:hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }

    a {
      color: #fff;
      padding: 15px 30px;
      display: block;
    }
  }
`

import styled from 'styled-components'

export const NotFound = styled.div`
  min-height: calc(100vh - 300px);
  overflow: hidden;

  @media (max-width: 899px) {
    min-height: calc(100vh - 272px);
  }

  .container {
    position: relative;
    height: 100%;
    padding-top: 15.407rem;
  }

  h1 {
    font-size: 7.43rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    position: absolute;
    top: 50px;
    right: 0;
    left: -50px;
    text-align: center;
    z-index: 2;

    span {
      position: relative;
      display: inline-block;

      &:nth-of-type(1) {
        top: 30px;
        transform: rotate(-20deg);
      }

      &:nth-of-type(2) {
        left: 20px;
      }

      &:nth-of-type(3) {
        left: 50px;
        transform: rotate(20deg);
      }
    }
  }

  p {
    font-weight: 300;
    font-size: var(--font-size__h4);
    line-height: 1.6;
    color: #777;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    text-align: center;

    &:nth-of-type(2) {
      padding-left: 150px;
      transform: rotate(2deg);
      margin-top: -8px;

      @media (max-width: 540px) {
        padding-left: 0;
        margin-top: 0;
        transform: rotate(4deg);
      }

      span {
        background: var(--color_red);
        padding: 0.402rem 30px;
      }
    }

    span {
      background: var(--color__headline);
      color: #fff;
      padding: 0.579rem 20px;
      display: inline-block;
    }

    a {
      color: #fff;
      display: inline-block;
    }
  }

  .lost-man {
    position: absolute;
    top: 25vh;
    left: 0;
    z-index: 1;
  }

  .balloon {
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 600px) {
      right: -200px;
      top: -50px;
    }
  }
`

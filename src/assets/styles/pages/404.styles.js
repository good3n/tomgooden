import styled from 'styled-components'

export const NotFound = styled.div`
  min-height: calc(100vh - 300px);
  /* display: flex;
  align-items: center; */

  @media (max-width: 899px) {
    min-height: calc(100vh - 272px);
  }

  .container {
    position: relative;
    height: 100%;
    padding-top: 300px;
  }

  h1 {
    font-size: 150px;
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
    }

    span:nth-of-type(1) {
      top: 30px;
      transform: rotate(-20deg);
    }

    span:nth-of-type(2) {
      left: 20px;
    }

    span:nth-of-type(3) {
      left: 50px;
      transform: rotate(20deg);
    }
  }

  p {
    font-weight: 300;
    font-size: 21px;
    line-height: 1.6;
    color: #777;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    text-align: center;

    &:nth-of-type(2) span {
      background: var(--color_red);
    }

    span {
      background: #000;
      color: #fff;
      padding: 10px 20px;
      display: inline-block;
    }

    a {
      color: #fff;
      display: inline-block;
      font-weight: 600;
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
  }
`

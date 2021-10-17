import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  position: relative;
  margin-bottom: 124px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
    column-gap: 20px;
  }

  > article:nth-of-type(1) {
    grid-column: 1 / 3;
  }

  a {
    text-decoration: none;

    &::before {
      display: none;
    }
  }

  article:not(:first-of-type) {
    h1 {
      margin-bottom: 10px;
      font-size: 24px;

      @media (max-width: 899px) {
        font-size: 18px;
      }
    }

    .meta {
      grid-template-columns: 1fr;
      color: var(--color__base--light);

      img,
      .author {
        display: none;
      }

      .date-time {
        font-size: 16px;

        span {
          font: 0/0 a;
          display: block;
        }
      }
    }
  }
`

export const Block = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;

  h3 {
    margin-bottom: 20px;
  }

  @media (max-width: 899px) {
    display: none;
  }
`

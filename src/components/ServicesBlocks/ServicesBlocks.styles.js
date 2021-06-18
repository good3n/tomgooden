import styled from 'styled-components'

export const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    padding: 4.3rem 80px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 899px) {
      padding: 3.583rem 30px;
    }

    &:nth-of-type(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      background-color: var(--color_red);
      color: #fff;

      @media (max-width: 1175px) {
        grid-column: 1 / 5;
        grid-row: 1 / 2;
      }

      h2 {
        color: #fff;
      }
    }

    &:nth-of-type(2) {
      grid-column: 3 / 5;
      grid-row: 1 / 2;
      background-color: var(--color_blue);
      color: #fff;

      @media (max-width: 1175px) {
        grid-column: 1 / 5;
        grid-row: 2 / 3;
      }

      h2 {
        color: #fff;
      }
    }

    &:nth-of-type(3) {
      background-color: var(--color_offWhite);
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      color: var(--color_text--heading);

      @media (max-width: 1175px) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }

      @media (max-width: 600px) {
        grid-column: 1 / 5;
      }

      h2 {
        color: var(--color_text--heading);
      }
    }

    &:nth-of-type(4) {
      grid-column: 4 / 5;
      grid-row: 2 / 3;
      background-color: var(--color_yellow);
      color: var(--color_text--heading);

      @media (max-width: 1175px) {
        grid-column: 3 / 5;
        grid-row: 3 / 4;
      }

      @media (max-width: 600px) {
        grid-column: 1 / 5;
        grid-row: 4 / 5;
      }

      h2 {
        color: var(--color_text--heading);
      }
    }
  }

  h2 {
    display: flex;
    align-items: center;
    margin-top: 0;
  }

  svg {
    width: 40px;
    margin-right: 15px;
  }

  p {
    clear: both;
    margin: 0;
    font-weight: 500;
  }
`

import styled from 'styled-components'

export const Contact = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 70px;

  @media (max-width: 1175px) {
    display: block;
  }

  @media (max-width: 600px) {
    margin: 3rem 0;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    > div:last-of-type {
      grid-column: 1 / 3;

      @media (max-width: 600px) {
        grid-column: 1 / 2;
      }
    }
  }

  label {
    font-weight: bold;
    font-size: var(--font-size__base--sm);
    color: var(--color__headline);
  }

  span {
    background: #fff;
    display: block;
    position: relative;
    background-color: #f5f8f9;
    z-index: 1;
    border-radius: 10px;
  }

  input,
  textarea,
  select {
    display: block;
    width: 100% !important;
    border: none;
    font-weight: normal;
    padding: 1rem 20px;
    outline: 0;
    margin-top: 7px;
    resize: none;
    border-radius: 8px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none;
  }

  input,
  select {
    height: 3rem;
    line-height: 3rem;
    padding: 0 20px;
  }

  select + svg {
    position: absolute;
    right: 15px;
    top: 16px;
    width: 21px;
    z-index: -1;

    path {
      fill: #53caee;
    }
  }

  textarea {
    min-height: 10rem;

    @media (max-width: 600px) {
      height: 100px;
    }
  }

  button {
    grid-column: 2 / 3;
    margin: 1rem 0 0 auto;
    cursor: pointer;

    @media (max-width: 600px) {
      grid-column: 1 / 2;
      margin-left: 0;
      display: block;
    }
  }
`

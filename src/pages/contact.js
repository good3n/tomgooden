import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'

const Contact = styled.div`
  margin: 100px 0;
  padding: 0 200px;

  @media (max-width: 1175px) {
    padding: 0;
  }

  @media (max-width: 600px) {
    margin: 50px 0;
  }

  h1 {
    font-size: var(--font-size__big-ass);

    @media (max-width: 600px) {
      font-size: var(--font-size__h1);
    }
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
    color: ${props => props.theme.colors.headingText};
  }

  span {
    background: #fff;
    display: block;
  }

  input,
  textarea,
  select {
    display: block;
    width: 100% !important;
    border: none;
    border-bottom: 3px solid var(--color_blue);
    font-weight: normal;
    padding: 20px;
    outline: 0;
    margin-top: 7px;
    resize: none;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input,
  select {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
  }

  textarea {
    min-height: 200px;

    @media (max-width: 600px) {
      height: 100px;
    }
  }

  button {
    grid-column: 2 / 3;
    color: #fff;
    padding: 15px 30px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    font-size: var(--font-size__small);
    background-color: var(--color_red);
    border: none;
    display: flex;
    margin: 30px 0 0 auto;
    outline: 0;
    cursor: pointer;

    @media (max-width: 600px) {
      grid-column: 1 / 2;
      margin-left: 0;
      display: block;
    }
  }
`

const ContactPage = () => {
  return (
    <div className="container">
      <Contact>
        <SEO title="Contact" />
        <h1>Get in touch</h1>
        <p>
          Whether it’s a new project, consulting inquiries, or you’d just like
          to drop a line, shoot me a message via the contact form below.
        </p>
        <form
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input name="form-name" type="hidden" value="contact" />
          <input name="bot-field" type="hidden" placeholder="Phone" />

          <div>
            <label labelFor="name">
              Your name{' '}
              <span>
                <input id="name" name="name" type="text" required />
              </span>
            </label>
          </div>
          <div>
            <label labelFor="email">
              Email{' '}
              <span>
                <input id="email" name="email" type="email" required />
              </span>
            </label>
          </div>
          <div>
            <label labelFor="reason">
              What brings you here?
              <span>
                <select id="reason" name="reason" required>
                  <option value="newdesign">New website design</option>
                  <option value="redesign">Current website redesign</option>
                  <option value="webapp">Custom web application</option>
                  <option value="consulting">Consulting</option>
                  <option value="hello">Just saying hey!</option>
                </select>
              </span>
            </label>
          </div>
          <div>
            <label labelFor="budget">
              What's your budget?
              <span>
                <select id="budget" name="budget" required>
                  <option value="2k-5k">$2,500-$5,000</option>
                  <option value="5k-7500">$5,000-$7,500</option>
                  <option value="7500-10k">$7,500-$10,000</option>
                  <option value="10k-plus">$10,000+</option>
                </select>
              </span>
            </label>
          </div>
          <div>
            <label labelFor="message">
              Additional details{' '}
              <span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Current website link, current pain-points, etc"
                ></textarea>
              </span>
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </Contact>
    </div>
  )
}

export default ContactPage

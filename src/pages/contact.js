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

  .grid {
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
    color: #fff;
    padding: 15px 30px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: var(--font-size__small);
    background-color: var(--color_red);
    border: none;
    display: flex;
    margin: 30px 0 0 auto;
    outline: 0;
    cursor: pointer;
  }
`

const ContactPage = () => (
  <div className="container">
    <Contact>
      <SEO title="Contact" />
      <h1>Get in touch</h1>
      <p>
        Whether it’s a new project, consulting inquiries, or you’d just like to
        drop a line, shoot me a message via the contact form below.
      </p>
      <form
        netlify
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        action="/thanks"
      >
        <input type="hidden" name="bot-field" placeholder="Phone" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid">
          <div>
            <label>
              Your name{' '}
              <span>
                <input type="text" name="name" required />
              </span>
            </label>
          </div>
          <div>
            <label>
              Email{' '}
              <span>
                <input type="email" name="email" required />
              </span>
            </label>
          </div>
          <div>
            <label>
              What brings you here?
              <span>
                <select name="reason" required>
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
            <label>
              What's your budget?
              <span>
                <select name="budget" required>
                  <option value="2k-5k">$2,500-$5,000</option>
                  <option value="5k-7500">$5,000-$7,500</option>
                  <option value="7500-10k">$7,500-$10,000</option>
                  <option value="10k-plus">$10,000+</option>
                </select>
              </span>
            </label>
          </div>
          <div>
            <label>
              Additional details{' '}
              <span>
                <textarea
                  name="message"
                  placeholder="Current website link, current pain-points, etc"
                ></textarea>
              </span>
            </label>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </Contact>
  </div>
)

export default ContactPage

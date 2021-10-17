import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { ServicesBlocks } from '../components/ServicesBlocks'
import { ProjectRoadmap } from '../components/ProjectRoadmap'
import styled from 'styled-components'

const Contact = styled.div`
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

const ContactPage = () => {
  return (
    <Layout>
      <div className="container">
        <Contact>
          <Seo title="Contact" />
          <div>
            <h1>Get in touch</h1>
            <p>
              Contact me today for a <strong>free quote</strong> on website and
              custom application development services.
            </p>
          </div>
          <form
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thanks"
            name="contact"
          >
            <input name="form-name" type="hidden" value="contact" />
            <input name="bot-field" type="hidden" placeholder="Phone" />

            <div>
              <label htmlFor="name">
                Your name{' '}
                <span>
                  <input id="name" name="name" type="text" required />
                </span>
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email{' '}
                <span>
                  <input id="email" name="email" type="email" required />
                </span>
              </label>
            </div>
            <div>
              <label htmlFor="reason">
                What brings you here?
                <span>
                  <select id="reason" name="reason" required>
                    <option value="newdesign">New website design</option>
                    <option value="redesign">Current website redesign</option>
                    <option value="webapp">Custom web application</option>
                    <option value="consulting">
                      Search engine optimzation
                    </option>
                    <option value="consulting">Consulting</option>
                    <option value="hello">Just saying hey!</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.825 21.825"
                  >
                    <defs />
                    <path
                      fill="#1e201d"
                      d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div>
              <label htmlFor="budget">
                What's your budget?
                <span>
                  <select id="budget" name="budget" required>
                    <option value="2k-5k">$2,500-$5,000</option>
                    <option value="5k-7500">$5,000-$10,000</option>
                    <option value="7500-10k">$10,000-$20,000</option>
                    <option value="10k-plus">$20,000+</option>
                    <option value="na">n/a</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.825 21.825"
                  >
                    <defs />
                    <path
                      fill="#1e201d"
                      d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div>
              <label htmlFor="message">
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
      {/* <ServicesBlocks /> */}
      <ProjectRoadmap />
    </Layout>
  )
}

export default ContactPage

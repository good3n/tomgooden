import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { ProjectRoadmap } from '../components/ProjectRoadmap'
import { Contact } from '../assets/styles/pages/Contact.styles'

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
            action="/thanks"
            data-netlify="true"
            method="POST"
            name="contact"
            netlify-honeypot="bot-field"
          >
            <input name="form-name" type="hidden" value="contact" />
            <input name="bot-field" placeholder="Phone" type="hidden" />

            <div>
              <label htmlFor="name">
                Your name{' '}
                <span>
                  <input id="name" name="name" required type="text" />
                </span>
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email{' '}
                <span>
                  <input id="email" name="email" required type="email" />
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
                    viewBox="0 0 21.825 21.825"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z"
                      fill="#1e201d"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div>
              <label htmlFor="budget">
                What&apos;s your budget?
                <span>
                  <select id="budget" name="budget" required>
                    <option value="2k-5k">$2,500-$5,000</option>
                    <option value="5k-7500">$5,000-$10,000</option>
                    <option value="7500-10k">$10,000-$20,000</option>
                    <option value="10k-plus">$20,000+</option>
                    <option value="na">n/a</option>
                  </select>
                  <svg
                    viewBox="0 0 21.825 21.825"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z"
                      fill="#1e201d"
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

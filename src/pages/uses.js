import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledUses } from '../assets/styles/pages/Uses.styles'
import items from '../data/uses.json'

const UsesPage = () => {
  const uniques = [...new Set(items.data.map((item) => item))]

  return (
    <Layout>
      <Seo title="Uses" />
      <StyledUses>
        <header className="container">
          <StaticImage
            src="../assets/images/uses.jpeg"
            alt="Tom Gooden Uses"
            objectFit="cover"
            objectPosition="center -50px"
            height={470}
          />
          <div>
            <h1>/uses</h1>
            <p>
              A list of goodies that I use in my work and personal life. Full
              transparency, some of these links are referrals. Checkout more
              uses at{' '}
              <strong>
                <a
                  href="https://uses.tech/?from=tomgooden.net"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  uses.tech
                </a>
              </strong>
              .
            </p>
          </div>
        </header>
        <div className="container container--skinny">
          <div className="grid">
            {uniques.map(({ categories, column }) => (
              <div key={column} className={column}>
                {categories.map(({ name, items }) => {
                  return (
                    <div key={name}>
                      <h2>{name}</h2>
                      <ul>
                        {items.map(({ title, description, link }) => {
                          const newLink =
                            link +
                            (link.match(/\?./) ? `&` : `?`) +
                            `from=tomgooden.net`
                          return (
                            <li key={title}>
                              {link ? (
                                <a
                                  href={newLink}
                                  rel="nofollow noreferrer"
                                  target="_blank"
                                >
                                  {title}
                                </a>
                              ) : (
                                title
                              )}
                              {description && <span> - {description}</span>}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </StyledUses>
    </Layout>
  )
}

export default UsesPage

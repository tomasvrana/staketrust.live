import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { LanguageConsumer } from '../state'

const Query = ({ render }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/404/*.md"}}) {
              nodes {
                relativePath
                childMarkdownRemark {
                  frontmatter {
                    content {
                      title
                      description
                      subtitle
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/404/404-${lang}.md`).shift()
          if (!content) throw new Error(`No content found for 404 page using language ${lang}`)
          return render(content.childMarkdownRemark)
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default () => (
  <Layout
    headData={{
      meta: [
        {
          name: 'robots',
          content: 'noindex,nofollow'
        }
      ]
    }}
  >
    <Query
      render={({ frontmatter }) => (
        <Fragment>
          <h1>
            <span data-text={frontmatter.content.title.toUpperCase()}>{frontmatter.content.title.toUpperCase()}</span>
            <span> _ </span>
            <span data-text='404'>404</span>
          </h1>
          <h2>{frontmatter.content.subtitle}</h2>
          <p>
            {frontmatter.content.description}
          </p>
        </Fragment>
      )}
    />
  </Layout>
)

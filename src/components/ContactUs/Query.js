import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer } from '../../state'

const Query = ({ render }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: {relativePath: {glob: "content/contact/*.md"}}) {
              nodes {
                relativePath
                childMarkdownRemark {
                  frontmatter {
                    title
                    content {
                      contact_title
                      contact_lead
                      contact_body
                      contact_form {
                        fullname
                        jobtitle
                        company
                        employees
                        producttype
                        phone
                        email
                        requiredfields
                        iagree
                        submit
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/contact/contact-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No footer translations found for language ${lang}`)
          return render({
            ...content.childMarkdownRemark.frontmatter,
            html: content.childMarkdownRemark.html
          })
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query

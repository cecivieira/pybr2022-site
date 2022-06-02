import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import GeneralContext from '@configs/context'
import Header from '@components/Header'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GeneralContext.Consumer>
        {theme => (
          <div>
            <Helmet title={data.site.siteMetadata.title} />
            <Header siteTitle={data.site.siteMetadata.title} language={theme.language} />
            <div>
              {children}
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </div>
        )}
      </GeneralContext.Consumer>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
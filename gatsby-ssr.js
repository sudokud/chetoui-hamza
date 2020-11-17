/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
import GlobalStateProvider from './src/store/globalStateProvider'
import 'bootstrap/dist/css/bootstrap.min.css';


export const wrapRootElement = ({ element }) => {
  return (

    <GlobalStateProvider>
      <ThemeProvider theme={Theme}>
        {element}
      </ThemeProvider>
    </GlobalStateProvider>
  )
}
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
import GlobalStateProvider from './src/store/globalStateProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
// require("prismjs/themes/prism-okaidia.css")
require("prismjs/themes/prism-custom.css")


export const wrapRootElement = ({ element }) => {
    return (

        <GlobalStateProvider>
            <ThemeProvider theme={Theme}>
                {element}
            </ThemeProvider>
        </GlobalStateProvider>

    )
}
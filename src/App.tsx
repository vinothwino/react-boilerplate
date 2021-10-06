import React from 'react'
import { ThemeProvider } from "styled-components";
// import themes from 'constants/theme'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'
import store from 'store'
import { Provider } from 'react-redux'
import 'assets/theme/main.scss'
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/theme/variables.scss');

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App;

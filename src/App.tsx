import React from 'react'
import { ThemeProvider } from "styled-components";
// import themes from 'constants/theme'
import { Router } from "react-router-dom";
import Routes from './routes'
import store from 'store'
import { Provider } from 'react-redux'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'
import ErrorBoundary from 'components/ErrorBoundaries';
import { ToastContainer } from 'react-toastify';
import { history } from 'helpers';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/icomoon/style.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyle />
            <Routes />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
            />
          </ErrorBoundary>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App;

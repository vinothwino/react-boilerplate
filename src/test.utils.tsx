// test-utils.js
import React from 'react'
import { render as rtlRender, configure } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import API from 'service/api'
import API_BOOK from 'service/endpoints'
import toast from "components/Toast";
import { Router } from "react-router-dom";
import reducers from './store/reducers'
import { createMemoryHistory } from 'history'
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

configure({ testIdAttribute: 'id' })

function render(
    ui,
    {
        initialState = {},
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
        store = createStore(
            reducers,
            initialState,
            applyMiddleware(
                thunk.withExtraArgument({
                    API,
                    API_BOOK,
                    toast,
                    history
                }),

            )
        ),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </Router>
            </Provider>
        )
    }
    return {
        ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
        store,
        history
    }
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
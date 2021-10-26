// test-utils.js
import React from 'react'
import { render as rtlRender, configure } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import API from 'service/api'
import API_BOOK from 'service/endpoints'
import toast from "helpers/Toast";
import { Router } from "react-router-dom";
import reducers from './store/reducers'
import { createMemoryHistory } from 'history'
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

configure({ testIdAttribute: 'id' })

interface Console {
    tron: any
}
declare global {
    interface Console {
        tron: any
    }
}

global.console = {
    log: jest.fn(), // console.log are ignored in tests

    // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
    error: jest.fn(),
    warn: jest.fn(),
    info: global.console.info,
    debug: jest.fn(),
};

jest.setTimeout(10000);

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
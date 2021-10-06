import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const middlewareEnhancer = applyMiddleware(thunk)
const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(middlewareEnhancer)
)
export default store
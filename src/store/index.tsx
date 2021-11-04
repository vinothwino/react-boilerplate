import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import API from 'service/api'
import API_BOOK from 'service/endpoints'
import { history } from "helpers/common";
import toast from "components/Toast";

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const middlewareEnhancer = applyMiddleware(
    thunk.withExtraArgument({
        API,
        API_BOOK,
        toast,
        history
    })
)
const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(middlewareEnhancer)
)
export default store
import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'

import devTools from 'remote-redux-devtools'

import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import rootReducer from 'reducers'

const middleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware,
    loggerMiddleware,
)

const store = createStore(
    rootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678,
        }),
    ),
)

export default store

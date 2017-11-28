'use strict';

import {applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import rootReducer from '../reducers/Index';
// import {createLogger} from 'redux-logger';

const logger = store => next => action => {
    if (typeof action === 'function')
        console.log('dispatching a function');
    else
        console.log('dispatching:', action);

    let result = next(action);
    console.log('result ACTION:', result);
    console.log('next state:', store.getState());
    return result;
}

let middlewares = [logger, thunk];

let createAppStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(onComplete: () => void) {
    const store = autoRehydrate()(createAppStore)(rootReducer);
    let opt = {
        storage: AsyncStorage,
        transform: [],
        // whitelist: ['userStore'],
    };
    persistStore(store, opt, onComplete);
    return store;
}


/*const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}*/


/*// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

export default function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware,
        ),
    );
    return createStore(rootReducer, initialState, enhancer);
}*/





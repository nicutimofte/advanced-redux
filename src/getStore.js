import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import {
    fromJS
} from 'immutable'

import { createSocketMiddleware } from './socketMiddleware';
import {
    users,
} from './../server/db';

import {
    RECEIVE_MESSAGE
} from './actions';


import {
    getDefaultState,
} from './../server/getDefaultState';

import {
    initializeDB,
} from './../server/db/initializeDB';

initializeDB();
import { createLogger } from 'redux-logger'
import { reducer } from './reducers';

const socketConfigOut = {
    UPDATE_STATUS: (data)=>({
        type: `UPDATE_USER_STATUS`,
        status:data
    })
};

const socketMiddleware = createSocketMiddleware(io)(socketConfigOut);
const logger = createLogger({
  stateTransformer:state=>state.toJS()
});
const enhancer = compose(
    applyMiddleware(
        socketMiddleware,
        logger
    )
);
const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));
const store = createStore(reducer,defaultState,enhancer);
const socketConfigIn = {
    NEW_MESSAGE:(data)=>({
        type:RECEIVE_MESSAGE,
      message:data
    })
};
const socket = io();
for (const key in socketConfigIn){
    socket.on(key,data=>{
        store.dispatch(socketConfigIn[key](data));
    })
}
// console.log(defaultState);
// console.log(store.getState().toJS());
export const getStore = ()=>store;

import React from 'react';
import {
  CurrentUserContainer
} from './components';

export const App = ()=>(
    <div>
        <h1>
            Redux Messenger
        </h1>
      <div className="row">
        <CurrentUserContainer/>
      </div>
    </div>
);
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import AppRouter from './Routers/AppRouter';
import '../src/firebase/firebase';


const AppRender = (
    <AppRouter/>
);

ReactDOM.render(AppRender, document.getElementById('root'));

serviceWorker.unregister();

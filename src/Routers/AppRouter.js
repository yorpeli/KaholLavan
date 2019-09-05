import React from 'react';
import Main from '../Components/Main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const AppRouter = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
    </BrowserRouter>
);

//   <Route path="/l/:id" component={loadID}/>

export default AppRouter;
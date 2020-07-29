import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from 'redux-promise'

import reducers from './reducers'
import PostsId from "./components/postsId";
import DisplayPosts from "./components/displayPosts";
import CreateNewPost from "./components/createNewPost";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/posts/new' component={CreateNewPost}/>
                    <Route path='/posts/:id' component={DisplayPosts}/>
                    <Route path='/' component={PostsId}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

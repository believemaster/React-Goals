import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route } from 'react-router-dom';
import history from './history';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        // console.log("user Signed In", user);
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/app')
    } else {
        // console.log("user Signed Out")
        history.replace('/signin')
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router exact path="/app" history={history}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)


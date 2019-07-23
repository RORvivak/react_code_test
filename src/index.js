import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  reducer from './store/reducer'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TaskListing from './task_listing';

const routing = (
    <Router>
        <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        </ul>
        </div>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/tasks" component={TaskListing} />
      </div>
    </Router>
  )

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

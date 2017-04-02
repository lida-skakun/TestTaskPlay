import React from 'react';
import {render} from 'react-dom';
import Main from './components/main';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class App extends React.Component {

    render () {
        return <div>
            <Main/>
        </div>;
    }

}


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
    document.getElementById('content')
    );
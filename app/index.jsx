import React from 'react';
import {render} from 'react-dom';
import Main from './components/main';

class App extends React.Component {

    render () {
        return <div>
            <Main />
        </div>;
    }

}


render(<App/>, document.getElementById('content'));
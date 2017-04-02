import React from 'react';
import {render} from 'react-dom';
import Signing from './signing';
import Header from './header';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handlerMain = this.handlerMain.bind(this);
        this.state = {
           firstComponent: <Signing submitHandler={this.handlerMain}/>,
           userEmail: ''
        };
    }

    render () {
        return  <div>
                {this.state.firstComponent}
        </div>
	}

	handlerMain(userInfo) {
        this.setState({firstComponent: <Header user={userInfo.email} />, userEmail: userInfo.email})
    }
}


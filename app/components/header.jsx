import React from 'react';
import {render} from 'react-dom';
import Signing from './signing';
import BlocksViewComponent from './blocksViewComponent';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handlerFilterSubmit = this.handlerFilterSubmit.bind(this);
        this.state = {
           page: <Signing submitHandler={this.handlerFilterSubmit}/>
        };
    }

    render () {
        return  <div className="header">
           {this.state.page}
        </div>
	}

	handlerFilterSubmit() {
       this.setState({page : <BlocksViewComponent />})

    }
}
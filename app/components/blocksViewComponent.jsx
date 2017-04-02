import React from 'react';
import {render} from 'react-dom';
import Upload from './upload';
import styles from '../../styles/blocksViewComponent.css';


export default class BlocksViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayImages = this.displayImages.bind(this);
        this.state = {
            userInfo: this.props.user,
            images: ''
        }
    }

    render () {
        
        return  <div className="blocksViewComponent" >
            {this.state.userInfo}  
        </div>
  	}	

    displayImages() {
        if(this.state.user == localStorage.getItem(this.state.user)) {
            this.setState({images: localStorage.getItem(this.state.user)});
        } else {
            this.setState({images: "No images"});
        }
    }
}
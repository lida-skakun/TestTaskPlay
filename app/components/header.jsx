import React from 'react';
import {render} from 'react-dom';
import BlocksViewComponent from './blocksViewComponent';
import Upload from './upload';
import styles from '../../styles/header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleTableView = this.handleTableView.bind(this);
        this.handleBlocksView = this.handleBlocksView.bind(this);
        this.handleUploadImages = this.handleUploadImages.bind(this);
        this.handleSinOut = this.handleSinOut.bind(this);
        this.state = {
           page: <BlocksViewComponent />,
           userInfo: this.props.user
        };
    }

    render () {
        return  <div className="header" >
            <nav>
                <a id="table"  onClick={this.handleTableView}> Table View</a>
                <a id="blocks" className="bold" onClick={this.handleBlocksView}> Blocks View</a>
                <a id="upload" onClick={this.handleUploadImages}> Image Upload</a>
                <a id="out" onClick={this.handleSinOut}> Sign Out</a>
            </nav>
            <div className="content">
                <p>Hello, {this.props.user}</p>
                {this.state.page}
            </div>
            <div className="footer">
                <nav>
                    <a onClick={this.handleTableView}> Table View |</a>
                    <a onClick={this.handleBlocksView}> Blocks View |</a>
                    <a onClick={this.handleUploadImages}> Image Upload |</a>
                    <a onClick={this.handleSinOut}> Sign Out |</a>
                </nav>
            </div>
        </div>
	}


	handleTableView() {
        this.setState({page : <TableViewComponent user={this.props.userInfo}/>})
        upload.removeAttribute("class", "bold")
        table.setAttribute("class", "bold")
        blocks.removeAttribute("class", "bold")
    }

    handleBlocksView() {
        console.log(this.state.userInfo)
        this.setState({page : <BlocksViewComponent user={this.state.userInfo} />})
        upload.removeAttribute("class", "bold")
        table.removeAttribute("class", "bold")
        blocks.setAttribute("class", "bold")
    }

    handleUploadImages() {
        this.setState({page : <Upload handleReturn={this.handleSinOut}/>})
        upload.setAttribute("class", "bold")
        table.removeAttribute("class", "bold")
        blocks.removeAttribute("class", "bold")
    }

    handleSinOut() {
        this.setState({page : <BlocksViewComponent />})
    }
}
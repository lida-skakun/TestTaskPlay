import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/upload.css';
import sha256 from 'js-sha256';
import base64 from 'base-64';


export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.handleloadedImg=this.handleloadedImg.bind(this)
        this.handleClear=this.handleClear.bind(this)
        this.handleSave=this.handleSave.bind(this)
        }

    render () {  
        return  <div className="upload">
                    <h3> Upload Images</h3>
                    <div className="uploadForm">
                        <input type="file" multiple id="loadedImage" name="files[]" accept="image/jpeg, image/png, image/jfif" onChange={this.handleloadedImg} />
                        <div className="imagesToDownload">
                           <output id="list"></output>
                        </div>
                    </div>
                    <hr />
                    <div className="buttons">
                        <input 
                            type="button" 
                            name="save" 
                            value="Save" 
                            onClick={this.handleSave}
                        /> 
                        <input 
                            type="button" 
                            name="clear" 
                            value="Claer All" 
                            onClick={this.handleClear}
                        /> 
                    </div>
                </div>
  	}
    
    handleloadedImg() {
        var files = loadedImage.files;
        // Render images
        for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();
            // Closure to capture the file information
            reader.onload = (function(theFile) {
                return function(e) {
                // Creating html tag with image
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>' +  
                    '<button type="button" class="close" id="nonen">' + 
                            '<span aria-hidden="true">×</span>' + 
                            '</button>'].join('');
                    list.insertBefore(span, null);
                    //Size and Name of image
                    var par = document.createElement('p');
                    par.innerHTML = theFile.name + ['<br />'] + theFile.size/1000 + "Кб";
                    list.insertBefore(par, null);
                    localStorage.setItem('img', e.target.result);
                    span.onmouseover = (function() {
                        nonen.setAttribute = ("display", "block")})
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }

    handleClear() {
        localStorage.clear();
        list.innerHTML = '';
    }

    handleSave() {
        if(localStorage.getItem('img')) {
            console.log(true)
        } else {
            this.props.handleReturn()
        }
    }


}

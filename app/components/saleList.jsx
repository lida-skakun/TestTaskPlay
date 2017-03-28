import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/sale.css';


const SaleList = () => {
    return (
        <div className="saleList">
	        <h2>Действующие акции</h2>
	        <div className="sale">
	        	<img src="../../img/sale1.jpg" />
	        </div>
	        <h2>Прошедшие акции</h2>        	
	        <div className="sale">
	        	<img src="../../img/sale2.jpg" />
	        </div>
	        <div className="sale">
	        	<img src="../../img/sale3.jpg" />
	        </div>
        </div>
    );
};


export default SaleList;
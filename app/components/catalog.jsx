import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/catalog.css';


const Catalog = () => {
    return (
        <div className="catalog">
            <div className="listOfItem">
                <ul>
                    <li>Боди</li>
                    <li>Колготки</li>
                    <li>Костюмы, Платья</li>
                    <li>Кофточки, Батники</li>
                    <li>Куртки, Комбинезоны</li>
                    <li>Маечки, Футболки</li>
                    <li>Носочкии</li>
                    <li>Слюнявчики</li>
                    <li>Трусики</li>
                    <li>Штанишки</li>
                    <li>Шапочки, Шарфики</li>
                </ul>
                <img id="baby2" src="../../img/baby2.jpg" />
            </div>
            <div className="categories">
                <div className="itemGroup">
                    <img src="../../img/bodi.jpg" />
                    <h6>Боди</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/kolgotki.jpg" />
                    <h6>Колготки</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/kostum.jpg" />
                    <h6>Костюмы, Платья</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/kof.jpg" />
                    <h6>Кофточки, Батники</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/kombi.jpg" />
                    <h6>Куртки, Комбинезоны</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/footb.jpg" />
                    <h6>Маечки, Футболки</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/noski.jpg" />
                    <h6>Носочкии</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/slun.jpg" />
                    <h6>Слюнявчики</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/trusy.jpg" />
                    <h6>Трусики</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/shtanu.jpg" />
                    <h6>Штанишки</h6>
                </div>
                <div className="itemGroup">
                    <img src="../../img/shapki.jpg" />
                    <h6>Шапочки, Шарфики</h6>
                </div>
                <img id="baby3" src="../../img/baby3.jpg" />
            </div>
        </div>
    );
};


export default Catalog;
import React from 'react';
import {Component} from 'react';
import './footer.css';
import './index.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="foot_info">
                    <p>
                        © Интернет-магазин «my_cars.ua» 2018
                    </p>
                    <p>
                        <span>Графік работи Call-центру:</span><br/>
                        Пн-Пт: 8:00-21:00, <br/>
                        Сб: 9:00-20:00, <br/>
                        Нд: 10:00-19:00.
                    </p>
                </div>
                <div className="foot_info">
                    <p>
                        <span>info@mycars.ua</span>
                    </p>
                    <p>
                        Всі звернення, надіслані на цю пошту, потраплять до власників та керівництва My cars.
                    </p>
                </div>
                <div className="foot_info">
                    <p>Контакти:<br/>
                        <span>+38 067 000 00 00; +38 093 000 00 00</span> <br/>
                    </p>
                    <p>м. Львів, вулиця Галицька.</p>
                </div>
            </div>
        )
    }
}

export default Footer;
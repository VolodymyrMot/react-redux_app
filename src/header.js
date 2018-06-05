import React from 'react';
import {Component} from 'react';
import './header.css';
import {connect} from "react-redux";
import Basket from './basket'


class Header extends Component{
    homePage =() =>{
        const name = '';
        this.props.onHomePage(name);
        const auto_lenght = document.getElementById('auto_lenght');
        const inp = document.getElementById('inp');
        inp.value = '';
        auto_lenght.style.display = "none";
    };

    funCome = ()=>{
        const come = document.getElementById('come');
        come.style.display = 'block';
    };
    funClose = ()=>{
        const come = document.getElementById('come');
        const regist = document.getElementById('regist');

        come.style.display = 'none';
        regist.style.display = 'none';

    };

    funRegist = ()=>{
        const come = document.getElementById('regist');
        come.style.display = 'block';
    };

    funClose2 = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    };

    render(){
        return(
            <div className="header" onClick={this.homePage.bind(this)}>
                <div className="logo">
                    <img src="http://www.exshin.ru/wheel.png" alt="img" width="50px" className="headImg"/>
                    <h1>My Cars.ua</h1>
                </div>
                <div className="header_contact_btn">
                    <div className="header_contact">
                        <p>+38 067 000 00 00; +38 093 000 00 00</p>
                        <p>м. Львів, вулиця Галицька.</p>
                    </div>
                    <div className="header_btn">
                        <button onClick={this.funCome.bind(this)} id="btn1" className="btn btn_come">Sing in</button>
                        <button onClick={this.funRegist.bind(this)} id="btn2" className="btn btn_regist">Sing up</button>
                    </div>
                </div>
                <Basket />
                <div id="come" onClick={this.funClose.bind(this)}>
                    <div className='come_list' onClick={this.funClose2.bind(this)}>
                        <h2>Sing in</h2>
                        {/*<div  className="btn close" onClick={this.funClose.bind(this)}><span> X </span></div>*/}
                        <div className="login">
                            <label htmlFor="Login">Login:</label><input className="inp login_inp" type="text"/>
                        </div>
                        <div className="login">
                            <label htmlFor="Password">Password:</label><input className="inp password_inp" type="password"/>
                        </div>
                        <button className="btn btn_come_regist" onClick={this.funClose.bind(this)}>Done</button>
                    </div>
                </div>
                <div id="regist" onClick={this.funClose.bind(this)}>
                    <div className='come_list' onClick={this.funClose2.bind(this)}>
                        <h2>Sing up</h2>
                        {/*<div  className="btn close" onClick={this.funClose.bind(this)}><span> X </span></div>*/}
                        <div className="login">
                            <label htmlFor="Login">Login:</label><input className="inp login_inp" type="text"/>
                        </div>
                        <div className="login">
                            <label htmlFor="email">Email:</label><input className="inp login_inp" type="text"/>
                        </div>
                        <div className="login">
                            <label htmlFor="Password">Password:</label><input className="inp password_inp" type="password"/>
                        </div>
                        <button className="btn btn_come_regist" onClick={this.funClose.bind(this)}>Done</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({
        cars: state.cars.filter(car => car.name.toLowerCase().includes(state.search.toLowerCase()))
    }),
    dispatch=>({
        onHomePage: (name)=>{
            dispatch({type: 'HOME_PAGE', payload: name})
        }
    })
)(Header);
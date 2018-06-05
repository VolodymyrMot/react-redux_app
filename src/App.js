import React from 'react';
import {Component} from "react";
import {connect} from 'react-redux';
import './App.css';
import './index.css';

class App extends Component {
    findCar = () =>{
        if(this.searchInput.value){
            this.props.onFindCar(this.searchInput.value);
            const auto_lenght = document.getElementById('auto_lenght');
            auto_lenght.style.display = "block";
        } else {
            alert('Введіть марку авто!');
        }
    };

    funList = (event)=>{
        event.target.value = event.target.value.substr(0,20);
    };

    openBasket =()=>{
        const basket = document.getElementById('basket100');
        basket.style.display = 'block';

    };


    render() {
        const filterCar = this.props.cars;
        const basket_list = this.props.corzyna;

        if(basket_list.length!==0){
            const o_green = document.getElementById('o_green');
            const basket_btn = document.getElementById('basket_b');
            basket_btn.style.opacity = '0.9';
            o_green.style.background = 'green';
        }

        if(filterCar.length !== 0){
            return (
                <div className="content">
                    <div className="sale">
                        <h1>Summer discounts</h1>
                        {/*<div className="sale_do"><span>up to</span></div>*/}
                        <div className="sale_number"><span>30%</span></div>
                    </div>
                    <div className="search">
                        <input id="inp" className="inp search_inp" type="text" ref={(input)=>{this.searchInput = input}} onChange={this.funList.bind(this)} placeholder="Search..."/>
                        <button className="search_btn" onClick={this.findCar.bind(this)}>Find</button>
                    </div>
                    <div>
                        <button id="basket_b" className="toBasket basket_btn" onClick={this.openBasket.bind(this)}><div id='o_green'>{basket_list.length}</div>
                            <img src="https://png.icons8.com/android/1600/shopping-cart.png" alt="img"/>Basket</button>
                    </div>
                    <div id="auto_lenght"><h3> За Вашим запитом знайдено {filterCar.length} автомобілів</h3></div>
                    <div className="content_list">
                        {
                            filterCar.map((car)=>
                                    <div className="block" key={car.id}>
                                        <img src={car.img} alt="img" width="100%"/>
                                        <div className="blockInfo">
                                            <h3 className="name">{car.name}</h3>
                                            <h4 className='secondName'>- {car.secondName} -</h4>
                                            <h4 className="price">{car.price}<span> UAH</span></h4>
                                            <div className="toBasket" onClick={()=>{this.props.toBasket(car)}}>
                                                <img src="https://png.icons8.com/android/1600/shopping-cart.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                        </div>
                </div>
            );
        } else {
            return (
                <div className="content">
                    <div className="sale">
                        <div><h1>Весняні знижки</h1></div>
                        <div className="sale_do"><span>до</span></div>
                        <div className="sale_number"><span>30%</span></div>
                    </div>
                    <div className="search">
                        <input id="inp" className="inp search_inp" type="text" ref={(input)=>{this.searchInput = input}} onChange={this.funList.bind(this)} placeholder="Введіть назву..."/>
                        <button className="search_btn" onClick={this.findCar.bind(this)}>Find</button>
                    </div>
                    <div>
                        <button id="basket_b" className="toBasket basket_btn" onClick={this.openBasket.bind(this)}><div id='o_green'>{basket_list.length}</div>
                            <img src="https://png.icons8.com/android/1600/shopping-cart.png" alt="img"/>Basket</button>
                    </div>
                    <div id="auto_lenght"><h3> За Вашим запитом <span className="search_value">"{this.searchInput.value}"</span> знайдено {filterCar.length} автомобілів</h3></div>
                    <div className="notFound">
                        <h1>FILE NOT FOUND!!!</h1>
                    </div>
                </div>
            )
        }

    }
}


export default connect(
    state=>({
        cars: state.cars.filter(car => car.name.toLowerCase().includes(state.search.toLowerCase())),
        corzyna: state.corzyna
    }),
    dispatch=>({
        onFindCar: (name)=>{
            dispatch({type: 'FIND_CAR', payload: name});
        },
        toBasket: (car)=>{
            dispatch({type: 'TO_BASKET', payload: car, price: car.price})
        }
    })
)(App);
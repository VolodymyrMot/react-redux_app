import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import './basket.css';


class Basket extends Component{


    funClose1 = ()=>{
        const basket = document.getElementById('basket100');
        let p = document.getElementById('total_price');
        let btn = document.getElementById('buy');
        let btn_total = document.getElementById('btn_totalPrice');
        btn_total.style.display = 'block';
        p.style.display = 'none';
        btn.style.display = 'none';
        basket.style.display = 'none';
    };

    funClose2 = ()=>{
        const basket = document.getElementById('basket100');
        let p = document.getElementById('total_price');
        let btn = document.getElementById('buy');
        p.style.display = 'none';
        btn.style.display = 'none';
        basket.style.display = 'none';
    };

    funClose3 = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    };

    calcPrice = ()=>{
        let total = 0;
        this.props.corzyna.forEach((item)=>{
            total+= item.price;
            this.props.onTotal(total)
        });
        let p = document.getElementById('total_price');
        let btn_buy = document.getElementById('buy');
        let btn_total = document.getElementById('btn_totalPrice');
        btn_total.style.display = 'none';
        p.style.display = 'block';
        btn_buy.style.display = 'block';
    };

    render(){
        const basket_list = this.props.corzyna;
        if (basket_list.length>=1){
            return(
                <div id="basket100" onClick={this.funClose1.bind(this)}>
                    <div id="basket50" onClick={this.funClose3.bind(this)}>
                        {/*<span className="close btn_close" onClick={this.funClose1.bind(this)}>X</span>*/}
                        <h2>Basket</h2>
                        <h3>{basket_list.length} auto selected</h3>
                        <div className="basket_list">
                            {
                                basket_list.map((car)=>
                                    <div key={car.id}>
                                        <div className="basket_block">
                                            <div>
                                                <img src={car.img} alt="img"/>
                                            </div>
                                            <div>
                                                {car.name}
                                            </div>
                                            <div>
                                                {car.price}uah
                                            </div>
                                            <div className="buy_delete">
                                                <button className="delete_car"  onClick={()=>{
                                                    let p = document.getElementById('total_price');
                                                    let btn = document.getElementById('buy');
                                                    let btn_total = document.getElementById('btn_totalPrice');
                                                    btn_total.style.display = 'block';
                                                    p.style.display = 'none';
                                                    btn.style.display = 'none';
                                                    this.props.onDelete(car)}}>X</button>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            }
                        </div>
                        <div id="for_buy">
                            <button id="btn_totalPrice" className='delete_car' onClick={this.calcPrice.bind(this)}>Total price</button>
                            <p id="total_price">{this.props.total_price}</p>
                            <button id="buy" className="buy">Buy</button>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div id="basket100" onClick={this.funClose2.bind(this)}>
                    <div id="basket50">
                        {/*<span className="close btn_close" onClick={this.funClose1.bind(this)}>X</span>*/}
                        <h2>Basket</h2>
                        <h3>Basket is empty</h3>
                        <p id="total_price">{this.props.total_price}</p><button id="buy" className="buy">Buy</button>
                    </div>
                </div>
            )
        }

    }
}
export default connect(
    state=>({
        corzyna: state.corzyna,
        total_price: state.total_price
    }),
    dispatch=>({
        onDelete: (car)=>{
            dispatch({type: 'TO_DELETE', payload: car});
        },
        onTotal: (total)=>{
            dispatch({type: 'TOTAL_PRICE', payload: total})
        }
    })
)(Basket);
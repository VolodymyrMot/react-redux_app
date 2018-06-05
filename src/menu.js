import React from 'react';
import {Component} from 'react';
import './menu.css';
import './index.css';
import {connect} from "react-redux";

class Menu extends Component {
    funClearInp = () =>{
        const inp = document.getElementById('inp');
        const auto_lenght = document.getElementById('auto_lenght');
        inp.value = '';
        auto_lenght.style.display = "none";
    };

    render() {
        const menus = [
            {
                id: 1,
                name: "Mercedes",
                fun: () => {
                    const name = 'MERCEDES';
                    this.props.onMercedes(name);
                }
            },
            {
                id: 2,
                name: "BMW",
                fun: () => {
                    const name = 'BMW';
                    this.props.onBmw(name);
                }
            },
            {
                id: 3,
                name: "Wolksvagen",
                fun: () => {
                    const name = 'WOLKSVAGEN';
                    this.props.onWolksvagen(name);
                }
            },
            {
                id: 4,
                name: "Chevrolet",
                fun: () => {
                    const name = 'CHEVROLET';
                    this.props.onChevrolet(name);
                }
            },
            {
                id: 5,
                name: 'Porsche',
                fun: () => {
                    this.props.onPorsche('PORSCHE');
                }
            }
        ];

        return (
            <div className="menu">
                    {
                        menus.map((menu) =>
                            <div onClick={this.funClearInp.bind(this)} key={menu.id}>
                                <li  onClick={menu.fun}><img
                                    src="https://gleisbergs.de/wp-content/uploads/2017/11/ornament-1332804_960_720.png"
                                    alt="img" width="30px" height="15px"/><h4>{menu.name}</h4></li>

                            </div>)
                            }
            </div>
        )
    }
}


//class Link extends Component{
//    render(){
//        const url = '/' + this.props.label.toLowerCase().trim().replace(" ", "-");
//        return <div>
//            <a href={url}>{this.props.label}</a>
//        </div>
//    }
//}

export default connect(
    state =>({
        cars: state.cars.filter(car => car.name.toLowerCase().includes(state.search.toLowerCase()))
    }),
    dispatch=>({
        onMercedes: (name)=>{
            dispatch({type: 'MERCEDES', payload: name})
        },
        onBmw: (name)=>{
            dispatch({type: 'BMW', payload: name})
        },
        onWolksvagen: (name)=>{
            dispatch({type: 'WOLKSVAGEN', payload: name})
        },
        onChevrolet: (name)=>{
            dispatch({type: "CHEVROLET", payload: name})
        },
        onPorsche: (name)=>{
            dispatch({type: "PORSCHE", payload: name})
        }
    })
)(Menu);
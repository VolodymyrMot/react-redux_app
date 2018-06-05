//import React from 'react';

const initialState = '';

export default function search(state = initialState, action) {
    if (action.type === 'FIND_CAR') {
        return action.payload;
    } else if (action.type === 'MERCEDES') {
        return action.payload;
    } else if(action.type === 'BMW') {
        return action.payload;
    } else if(action.type === 'WOLKSVAGEN') {
        return action.payload;
    } if(action.type === 'HOME_PAGE'){
        return action.payload;
    } if(action.type === 'CHEVROLET'){
        return action.payload;
    } if(action.type === 'PORSCHE'){
        return action.payload;
    }
    return state;
}
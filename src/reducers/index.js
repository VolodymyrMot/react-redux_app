import { combineReducers } from 'redux';

import cars from './cars';
import search from './search';
import corzyna from './corzyna';
import total_price from './total_price'

export default combineReducers({
    cars,
    search,
    corzyna,
    total_price
});
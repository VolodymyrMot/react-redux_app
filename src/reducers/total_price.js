const initialState = '';
export default function total_price(state = initialState, action) {

    if (action.type === 'TOTAL_PRICE') {
        return [action.payload + ' uah'];
    }
    return state;
}
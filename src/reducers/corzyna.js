const initialState = [];
export default function corzyna(state = initialState, action) {

    if (action.type === 'TO_BASKET'&& state.includes(action.payload)) {
        console.log('basket ',[...state]);
        return [...state];
    } else if(action.type === 'TO_BASKET'){
        console.log('basket ',[...state, action.payload]);
        return [...state, action.payload];
    } else if(action.type === 'TO_DELETE'){
        console.log('delete');
        for (let i = 0; i < state.length; i++) {
            if (state[i] === action.payload) {
                state.splice(i, 1);
                return [...state];
            }
        }
        return [
            ...state
        ];
    }
    return state;
}
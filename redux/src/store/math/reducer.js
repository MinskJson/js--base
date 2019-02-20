import { PLUS, MINUS } from "./constants";

const defaultState = {
    number: 0,
};

export function mathReducer(state = defaultState, action) {
    if (action.type === PLUS) {
        return Object.assign({}, {
            number: state.number + action.payload
        });
    }

    if (action.type === MINUS) {

        return {
            number: state.number - action.payload
        };
    }

    if (action.type === 'SET') {
        return {
            number: action.payload
        };
    }

    return state;
};
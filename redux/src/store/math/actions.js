import { MINUS, PLUS } from "./constants";

export function mathPlus(number) {
    return {
        type: PLUS,
        payload: number,
    }
}

export function mathMinus(number) {
    return {
        type: MINUS,
        payload: number,
    }
}

export function mathSetNumber(number) {
    return {
        type: 'SET',
        payload: number,
    }
}
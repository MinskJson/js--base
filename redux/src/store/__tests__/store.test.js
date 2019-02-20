import { store } from '../index';
import * as actions from '../math/actions';

describe('store -> math reducer', ()=> {
    it('store exists', () => {
        let state = store.getState();
    
        expect(state).toBeDefined();
      });
    
    it('reducer math', () => {
        let state = store.getState();
    
        expect(state.math).toBeDefined();
        expect(state.math.number).toBeDefined();
        expect(state.math.number).toBe(0);
    
        expect(actions).toBeDefined();
        expect(actions.mathPlus).toBeDefined();
        expect(actions.mathMinus).toBeDefined();
    });
    
    it('action mathPlus', () => {
        let state = store.getState();
    
        const prevMath = state.math;
    
        store.dispatch(actions.mathPlus(5));
    
        state = store.getState();
    
        expect(state.math.number).toBe(5);
        expect(state.math).not.toBe(prevMath);
    });
    
    it('action mathPlus', () => {
        let state = store.getState();
    
        const prevMath = state.math;
    
        store.dispatch(actions.mathMinus(3));
    
        state = store.getState();
    
        expect(state.math.number).toBe(2);
        expect(state.math).not.toBe(prevMath);
    });
});
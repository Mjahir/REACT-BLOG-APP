import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        counterReducer: (state = { count : 0 }) => ({ ...state, count: state.count + 1 })
    }
});


export default store;
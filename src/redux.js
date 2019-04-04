import {
    combineReducers,
    createStore,
} from 'redux';

// ACTIONS -- actions.js -- Minimal representation of change to data
export const setCurrentProfile = (profile) => ({
    type: 'SET_CURRENT_PROFILE',  
    profile
});

// REDUCERS -- tasks.js
export const reducers = (state, action) => {
    switch (action.type) {

        case "SET_CURRENT_PROFILE":  
            return {
                ...state,
                currentProfileView: action.profile
            }

        default:
            return state;
    }
};

// STORE -- store.js
export function configureStore(initialState = {
    people: [
        {id:1, name:"Tina", city:"Milwaukee", instustry:"Software Engineering", hobbies:"Tennis, Soccer", email:"tina@gmail.com"},
        {id:2, name:"Tim", city:"Milwaukee", instustry:"Software Engineering", hobbies:"Tennis, Soccer", email:"tina@gmail.com"},
        {id:3, name:"Laura", city:"Milwaukee", instustry:"Software Engineering", hobbies:"Tennis, Soccer", email:"tina@gmail.com"},
    ],
    currentProfileView: null
}) {
    const store = createStore(reducers, initialState);
    return store;
};


export const store = configureStore();

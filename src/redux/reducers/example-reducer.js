const SET_VALUE = 'SET_VALUE';

let initialState = {
    value: 0
}

const ExampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                value: state.value + 1
            }

        default: return state;
    }
}

export const setValue = () =>  ({type: SET_VALUE })

export default ExampleReducer;
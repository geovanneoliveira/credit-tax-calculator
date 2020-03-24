const initialState = { 'debit': 0.0239, 'credit': 0.05 };

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'EDIT_TAXES':
            return {...state, ...action.payload};

        default:
            return state;
    }
}

export default reducer;
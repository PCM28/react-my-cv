const initialState = {
    amount:20000,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action)=>{
    if(action.type === "DEPOSIT"){
        return {
            ...state,
            amount: state.amount + 1000,
        };
    }

    if(action.type === "WITHDRAW"){
        return{
            ...state,
            amount: state.amount - 1000,
        };
    }
    return state;
};
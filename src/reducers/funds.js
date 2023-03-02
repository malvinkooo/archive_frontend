const funds = (store={
    list: []
}, action) => {
    switch(action.type) {
        case "SET_FUNDS":
            return {
                list: [...action.payload]
            };
            break;
        
        case "ADD_FUND":
            return {
                list: [action.payload, ...store.list],
            }
            break;

        // update, delete

        default:
            return store;
    }
};

export default funds;

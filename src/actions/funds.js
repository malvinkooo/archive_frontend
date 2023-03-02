export const setFundsAction = list => ({
    type: "SET_FUNDS",
    payload: list,
});

export const addFundAction = fund => ({
    type: "ADD_FUND",
    payload: fund,
});

// updatefund, deletefund
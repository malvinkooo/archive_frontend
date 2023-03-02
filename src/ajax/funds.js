import axios from "axios";

export const getFunds = () => (
    axios("http://localhost:8080/funds")
);

export const addFund = fund => (
    axios.post("http://localhost:8080/funds", fund, {
        headers: {
            "Content-Type": "application/json"
        }
    })
);

// getFund updateFund deleteFund
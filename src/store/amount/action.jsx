const deposit = () =>{
    return {
        type: "DEPOSIT",
        payload:1000,
    }
}

const withdraw = () =>{
    return {
        type: "WITHDRAW",
        payload: -1000,
    }
}

export {deposit, withdraw};
import {deposit, withdraw} from "../../store/amount/action";
import {connect} from "react-redux";
import './index.scss';
const mapStateToProps = (state) =>{
    return{
        amount: state.amountReducer.amount,
    };
};
const Counter = ({amount, deposit, withdraw}) =>{
    return (
        <div>
            <h1>Último salario anual: {amount}€ </h1>
            <button onClick={()=>deposit()}>Depositar 1000€</button>
            <button onClick={()=>withdraw()}>Retirar 1000€</button>
        </div>
    )
}

export default connect(mapStateToProps,{deposit,withdraw})(Counter);
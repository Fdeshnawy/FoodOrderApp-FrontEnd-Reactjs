import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = props =>{
    const cartCtx = useContext (CartContext);

    const addtoCart = amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount: amount,
            price: props.price,
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>${props.price}</div>
            </div>
            <MealItemForm onAddToCart={addtoCart} id={props.id} />
        </li>
    )
}
export default MealItem ;
import { useContext, useState , useEffect} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = props => {
    const[btnHighlighted,setBtnHigh]=useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNum,item) =>
    {
        return curNum + item.amount; 
    },0);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${ btnHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if(cartCtx.items.length === 0)
        {
            return;
        }
        setBtnHigh(true);
        const timer = setTimeout(()=>{
            setBtnHigh(false);
        },300

        );
        return () =>{
            clearTimeout(timer);
        };
        
     
    }, [items])
    
    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;
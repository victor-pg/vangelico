import { combineReducers } from 'redux';
import {inele} from './inele';
import {cercei} from './cercei';
import {coliere} from './coliere';
import {brose} from './brose';
import {bratari} from './bratari';
import {pandantive} from './pandantive';
import {cart} from './cart';

export default combineReducers({
    inele,
    cercei,
    coliere,
    brose,
    bratari,
    pandantive,
    cart
});
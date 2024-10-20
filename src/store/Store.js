import {configureStore} from '@reduxjs/toolkit'
import habitSlicer from '../feautures/habits/habitsSlicer';
const Store=configureStore({
    reducer:{
        habit:habitSlicer
    },
});
export default Store;
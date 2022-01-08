import { createStore } from "redux";
import reducers from '../redux/reducers/index'

export let store  = createStore(reducers)
const root = "http://localhost:8080";
import axios from 'axios';
import FETCH_ITEMS from '../types';

export function fetchItems(){
    const request = axios.get(`${root}/itemData`);
    return {
        type : FETCH_ITEMS,
        payload : request
    };
}

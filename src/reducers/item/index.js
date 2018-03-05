import FETCH_ITEM from '../../actions/types';

export default function fetchItems(state=[],action){
    switch(action.type){
        case FETCH_ITEM:
             return [...state,...action.payload.data.CatalogEntryView];
    }
    return state;
}


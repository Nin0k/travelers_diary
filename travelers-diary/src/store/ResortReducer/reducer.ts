import { TypeResort } from '../../components/InfoBlock/types';
import { ResortActionsTypes } from './actions';

let allResorts: TypeResort[] = [];

const initialState = {
  allResorts,
};

type InitialType = typeof initialState;

function reducer(
  state = initialState,
  action: ResortActionsTypes
): InitialType {
  switch (action.type) {
    case 'ADD_ARRAY_PLACES':
      return {
        ...state,
        allResorts: [...action.payload],
      };
    default:
      return state;
  }
}

export default reducer;

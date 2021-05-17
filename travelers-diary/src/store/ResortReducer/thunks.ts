import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { getAllResortsApi } from './../../api/getAllResorts';
import { addArrayPlaces } from './actions';

export const getAllResorts = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      const resorts = await getAllResortsApi();
      dispatch(addArrayPlaces(resorts));
    } catch (e) {
      console.log(e);
    }
  };
};

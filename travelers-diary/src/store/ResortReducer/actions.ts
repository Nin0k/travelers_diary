import { TypeResort } from '../../components/InfoBlock/types';

export const addArrayPlaces = (payload: TypeResort[]) => {
  return {
    type: 'ADD_ARRAY_PLACES' as const,
    payload,
  };
};

type addArrayPlacesType = ReturnType<typeof addArrayPlaces>;

export type ResortActionsTypes = addArrayPlacesType;

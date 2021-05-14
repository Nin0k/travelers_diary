//import * as actionTypes from '../actionCreators/actionTypes';
import { getAllResorts } from "../../api/getAllResorts";
import { stateAllResorts } from "../types/types";
import { TypeResort } from "../../components/InfoBlock/types";

let allResorts: TypeResort[] = [];

getAllResorts().then(
    (response) => {
        allResorts = response;
    },
    (error) => {
        console.log(error);
    }
);
console.log(allResorts);
const initialState: stateAllResorts = {
    allResorts,
};

function reducer(state = initialState, action: { type: string }) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;

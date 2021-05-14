import { TypeResort } from "../../components/InfoBlock/types";

export type stateAllResorts = {
    allResorts: TypeResort[];
};

export type RootState = {
    reducer: stateAllResorts,
}
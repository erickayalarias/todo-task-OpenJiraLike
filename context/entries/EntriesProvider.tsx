import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from 'uuid';
export interface EntriesState {
    entries: Entry[];
}
const Entries_INITIAL_STATE: EntriesState = {
    entries: [{
        _id: uuidv4(),
        description: "Lorem ipsum dolor sit amet, consectetur",
        status: "pending",
        createdAt:Date.now()
    },
  {
        _id: uuidv4(),
        description: "lorem10 ipsum dolor sit amet, consectetur",
        status: "in-progress",
        createdAt:Date.now() - 100000,
    },
   {
        _id: uuidv4(),
        description: "lorem10 ipsum dolor sit amet, consectetur",
        status: "finished",
        createdAt:Date.now() - 1000
    },],
};

export const EntriesProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
    
    return (
        <EntriesContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};

import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesType =
    | {
          type: "[Entry] Add-Entry",
          payload: Entry;
      }
    | {
          type: "[Entry] ENTRY-UPDATED",
          payload: Entry;
    }
    | {
          type: "[Entry] REFRESH-DATA",
          payload: Entry[];
    }
    
    ;

// minus
export const entriesReducer = (
    state: EntriesState,
    action: EntriesType
): EntriesState => {
    const { type } = action;
    switch (type) {
        case "[Entry] Add-Entry":
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };
        case "[Entry] ENTRY-UPDATED":
            return {
                ...state,
                entries: state.entries.map((entry) => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                }),
            };
        case "[Entry] REFRESH-DATA":
            return {
                ...state,
                entries:[...action.payload]
            }
        
        default:
            return state;
    }
};

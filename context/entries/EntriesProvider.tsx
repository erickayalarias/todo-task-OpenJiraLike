import { FC, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../apis";
import { useSnackbar } from "notistack";
export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
    const { enqueueSnackbar} = useSnackbar();
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addnewEntry = async (description: string) => {
        const { data } = await entriesApi.post<Entry>("/entries", { description })
        
        dispatch({ type: "[Entry] Add-Entry", payload: data });
    };

    const updateEntry = async ({_id, description, status}: Entry, showSnackbar= false) => {

        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
            dispatch({ type: "[Entry] ENTRY-UPDATED", payload: data });
            if (showSnackbar) {
                enqueueSnackbar("Entry updated", {
                    variant: "success",
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "right",
                    }
                })
            }
            

         
        } catch (error) {
            console.log(error)
        }
    };
    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>("/entries");
        dispatch({
            type: "[Entry] REFRESH-DATA",
            payload: data,
        });
    };

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                //methods
                addnewEntry,
                updateEntry,
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};

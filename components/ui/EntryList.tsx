import { List, Paper } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";
import { EntryCard } from "./EntryCard";

interface Props {
    status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {
    const {entries} = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status]);

    return (
        //Todo: desde aqui se hace el drop

        <div>
            <Paper
                sx={{
                    height: "calc(100vh - 250px)",
                    overflow: "auto",
                    backgroundColor: "transparent",
                    padding: "3px 5px",
                }}
            >
                {/* {"Todo : cambiara dependiendo de si yo hago drag o no"} */}
                <List sx={{ opacity: 1 }}>
            {
              entriesByStatus.map(entry => (
                <EntryCard key={entry._id} entry={entry} />
              ))
                }
                </List>
            </Paper>
        </div>
    );
};

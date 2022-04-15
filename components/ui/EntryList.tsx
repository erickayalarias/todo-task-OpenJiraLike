import { List, Paper } from "@mui/material";
import React, { DragEvent, FC, useContext, useMemo } from "react";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";
import { EntryCard } from "./EntryCard";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";
interface Props {
    status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext);

    const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status]);
    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text");
        const entry = entries.find(entry => entry._id === id)!;
        entry.status = status;
        updateEntry(entry)
        endDragging()
    }


    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        //Todo: desde aqui se hace el drop

        <div onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ""}
        >
            <Paper
                sx={{
                    height: "calc(100vh - 250px)",
                    overflow: "auto",
                    backgroundColor: "transparent",
                    padding: "3px 5px",
                }}
            >
                
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
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

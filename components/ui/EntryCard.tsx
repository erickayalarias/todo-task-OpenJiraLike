import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";
import {dateFunctions} from "../../utils";

interface Props{
    entry: Entry;
}
export const EntryCard: FC<Props> = ({ entry }) => {
    const router = useRouter()
    const {startDragging, endDragging}= useContext(UIContext);
    const onDragStart = (event:DragEvent) => {
        console.log(event)
        // todo:modificar el estado, para indicar que estoy haciendo drag
        event.dataTransfer.setData("text", entry._id);
        startDragging()
    }
    const onDragEnd = () => {
        //todo/ fin del drag 

        endDragging()
    }

    const onClick = () => {
        router.push("/entries/" + entry._id)
    }
    return (
        <Card
            onClick={onClick}
            sx={{

                marginBottom: 1,
            }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{
                        whiteSpace: "pre-line",
                    }}>
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: "flex",
                    justifyContent: "end",
                    paddingRight:2
                }}>
                    <Typography variant="body2">
                        {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries";
export const NewEntry = () => {
    const {addnewEntry} =useContext(EntriesContext);

    // Change is adding entry to a context
    // SetisaddingEntry (boolean)
    //This is going to be a payload tjhat will recieve a true or false
    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [touched, setTouched] = useState(false);

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSave = () => {
        if (inputValue.length === 0) return
        addnewEntry(inputValue);
        setIsAdding(false);
        setTouched(false);
        setInputValue("");
    }
    return (
        <Box
            sx={{
                marginBottom: 2,
                paddingX: 1,
            }}
        >
            {isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{
                            marginTop: 2,
                            marginBottom: 1,
                        }}
                        autoFocus
                        multiline
                        label="Nueva entrada"
                        helperText={inputValue.length <= 0 && touched}
                        error={inputValue.length <= 0 && touched}
                        value={inputValue}
                        onChange={onTextChange}
                        onBlur={() => setTouched(true)}
                    />
                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="text"
                            onClick={() => setIsAdding(false)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    variant="outlined"
                    onClick={() => setIsAdding(true)}
                >
                    Agregar Tarea
                </Button>
            )}
        </Box>
    );
};

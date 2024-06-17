import {
    Box,
    Button,
    Card, Checkbox,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import * as htmlToImage from 'html-to-image';
import {useEffect, useState} from "react";
import {cines, ICine} from "@/public/data/cines";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CineSelector = ({cine, setCine}:{cine: ICine|undefined, setCine: (cine: any) => void}) => {

    const handleChangeCine = (event: any) => {
        const cine = cines.find((cine) => cine.id === event.target.value)
        setCine(cine)
    }

    return (
        <FormControl fullWidth sx={{ marginBottom: "10px" }}>
            <InputLabel id="cine-select-label">Cine</InputLabel>
            <Select
                labelId="cine-select-label"
                id="cine-select"
                value={cine?.id}
                label="Cine"
                onChange={handleChangeCine}
            >
                <MenuItem key={"none"} value={undefined}>
                    -
                </MenuItem>
                {cines.map((cine) => (
                    <MenuItem key={cine.id} value={cine.id}>
                        {cine.nombre}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
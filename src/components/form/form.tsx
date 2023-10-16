'use client'

import { FunctionComponent, useState } from "react";
import StyledForm from "./style";
import { FormProps } from "@/types/props";

import { FormControl, InputLabel, MenuItem, TextField, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';


const Form: FunctionComponent<FormProps> = ({
    open,
    closeClick
}) => {
    const [isOpened, setIsOpened] = useState(open);
    const [age, setAge] = useState('');

    const closeModal = () => {
        setIsOpened(!isOpened);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return(
        <StyledForm className={`modal-form ${isOpened ? 'opened' : ''}`}>
            <div className="form">
                <div className="form__header">
                    <h1>
                        Ajouter un nouveau
                    </h1>

                    <div className="btn-close" onClick={closeModal}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </div>
                </div>

                <div className="form__body">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Utilisateur</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="utilisateur"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>


                        <TextField required id="outlined-basic" label="Catégorie" variant="outlined" />

                        <TextField
                            required
                            id="outlined-number"
                            label="Solde actuel"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            required
                            id="outlined-number"
                            label="Solde pris"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            required
                            id="outlined-number"
                            label="Solde futur"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <div className="button-container">
                            <Button variant="outlined" onClick={closeModal}>Cancel</Button>

                            <Button variant="contained">Ajouter</Button>
                        </div>
                    </FormControl>
                </div>
            </div>
        </StyledForm>
    )
}

export default Form;
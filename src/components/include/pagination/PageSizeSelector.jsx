import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setSize} from "../../../store/pagination/PaginationReducer";

const PageSizeSelector = () => {
    const size = useSelector(state => state.paginationData.size);
    const dispatch = useDispatch();

    return (
        <FormControl className={'size-selector'} sx={{m: 1}} size="small">
            <InputLabel id="demo-select-small">Size</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={size}
                label={'Size'}
                onChange={(event) => dispatch(setSize(event.target.value))}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </FormControl>
    );
};

export default PageSizeSelector;
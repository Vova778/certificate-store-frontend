import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Select} from "@mui/material";
import {useSearchParams} from "react-router-dom";

const PageSizeSelector = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.get('size') || 10;

    const updateSizeInSearchParams = (event) => {
        searchParams.set('size', event.target.value);
        setSearchParams(searchParams);
    };

    return (
        <FormControl className={'size-selector'} sx={{m: 1}} size="small">
            <InputLabel id="demo-select-small">Size</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={size}
                label={'Size'}
                onChange={updateSizeInSearchParams}>

                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </FormControl>
    );
};

export default PageSizeSelector;
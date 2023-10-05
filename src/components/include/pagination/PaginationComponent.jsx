import React from 'react';
import {Pagination} from "@mui/material";
import "../../../assets/styles/include/Pagination.css"
import PageSizeSelector from "./PageSizeSelector";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const FIRST_PAGE = 0;
    const [searchParams, setSearchParams] = useSearchParams();

    const page = parseInt(searchParams.get('page')) || FIRST_PAGE;
    const pageQty = useSelector(state => state.paginationData.pageQty);

    const handlePageChange = (_, number) => {
        const newPage = number - 1;
        searchParams.set('page', newPage.toString());
        setSearchParams(searchParams);
    };

    return (
        <div className={'bottom-container'}>
            <Pagination
                color={"primary"}
                page={page + 1}
                count={pageQty}
                onChange={handlePageChange}
            />
            <PageSizeSelector/>
        </div>
    );
};

export default PaginationComponent;
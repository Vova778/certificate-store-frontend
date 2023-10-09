import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";
import "../../../assets/styles/include/Pagination.css"
import PageSizeSelector from "./PageSizeSelector";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {setPageRefresh} from "../../../store/admin/AdminReducer";


const PaginationComponent = () => {
    const FIRST_PAGE = 0;
    const [searchParams, setSearchParams] = useSearchParams();
    const refresh = () => window.location.reload();

    const [page, setPage] = useState(parseInt(searchParams.get('page')) || FIRST_PAGE);
    const pageQty = useSelector(state => state.paginationData.pageQty);

    const handlePageChange = (_, number) => {
        const newPage = number - 1;
        searchParams.set('page', newPage.toString());
        setSearchParams(searchParams);
        refresh();
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
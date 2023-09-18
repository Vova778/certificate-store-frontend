import React, {useEffect} from 'react';
import {Pagination} from "@mui/material";
import "../../../assets/styles/include/Pagination.css"
import PageSizeSelector from "./PageSizeSelector";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../../store/pagination/PaginationReducer";

const PaginationComponent = () => {
    const FIRST_PAGE = 1;
    const page = useSelector(state => state.paginationData.page);
    const pageQty = useSelector(state => state.paginationData.pageQty);
    const dispatch = useDispatch();

    useEffect(() => {
        if (page > pageQty) {
            dispatch(setPage(FIRST_PAGE));
        }
    }, [pageQty]);

    return (
        <div className={'bottom-container'}>
            <Pagination
                color={"primary"}
                page={page}
                count={pageQty}
                onChange={(_, number) => dispatch(setPage(number))}
            />
            <PageSizeSelector/>
        </div>
    );
};

export default PaginationComponent;
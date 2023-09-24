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
    const size = searchParams.get('size') || 10;
    const pageQty = useSelector(state => state.paginationData.pageQty);


    return (
        <div className={'bottom-container'}>
            <Pagination
                color={"primary"}
                page={page + 1}
                count={pageQty}
                onChange={(_, number) => setSearchParams({
                    page: number - 1,
                    size: size
                })}
            />
            <PageSizeSelector/>
        </div>
    );
};

export default PaginationComponent;
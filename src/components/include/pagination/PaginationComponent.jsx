import React from 'react';
import "../../../assets/styles/include/Pagination.css"

const PaginationComponent = () => {

    return  (
        <div className={'bottom-container'}>
            <ul className="pagination">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
            </ul>

            <ul className="pagination">
                <li><a href="#">Next</a></li>
            </ul>
        </div>
    );
};

export default PaginationComponent;
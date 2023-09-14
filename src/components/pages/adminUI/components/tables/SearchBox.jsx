import React from 'react';
import '../../../../../assets/styles/include/SearchBox.css';
import {useDispatch, useSelector} from "react-redux";


const SearchBox = ({opinions}) => {
    const dispatch = useDispatch();

    return (
        <div className={'search-box-container'}>
            <div className={'search-box'}>
                <input id={'search-form-input'}
                       className={'search-form-input'}
                       type={'search'}
                       name={'search'}
                       placeholder={'Search...'}/>
                <select id="dropdown" className={'dropdown'}>
                </select>
            </div>
        </div>
    );
};

export default SearchBox;
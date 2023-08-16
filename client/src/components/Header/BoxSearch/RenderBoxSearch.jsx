import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { DropBtnBoxSearch } from '../RenderHeader';


function RenderBoxSearch() {

    const toStateValueBoxSearch = useContext(DropBtnBoxSearch);
    const locationSearch = useNavigate();
    const [value_search, setValue_search] = useState("");
    const [btnReset, setbtn__reset] = useState(false);

    const focusValueRef = useRef(null);

    const handleLocationSearch = useCallback((e) => {
        setValue_search(e.target.value);
        if (e.target.value != "") {
            locationSearch(`/search?q=${e.target.value}`);
            setbtn__reset(true);
        } else {
            locationSearch(toStateValueBoxSearch.getLocation);
            setbtn__reset(false);
        }
    }, [toStateValueBoxSearch, locationSearch, setbtn__reset]);

    const handleResetInputSearch = useCallback(() => {
        setValue_search("");
        focusValueRef.current.focus();
        locationSearch(toStateValueBoxSearch.getLocation);
        setbtn__reset(false);
        toStateValueBoxSearch.setdropdownBoxSearch(false);
    }, [toStateValueBoxSearch, focusValueRef, setValue_search, setbtn__reset]);

    const dropSearchRef = useRef();
    useEffect(() => {
        let handle = (e) => {
            if (!dropSearchRef.current.contains(e.target))
                if (value_search != "") {
                    toStateValueBoxSearch.setdropdownBoxSearch(true)
                } else {
                    toStateValueBoxSearch.setdropdownBoxSearch(false)
                }
        }
        document.addEventListener("mousedown", handle);
        return () => document.removeEventListener("mousedown", handle);
    });

    return (
        <>
            <div
                className={`box_search ${toStateValueBoxSearch.dropdownBoxSearch ? "activeDropBoxSearch" : "inactiveDropBoxSearch"}`}>
                <div className="body_trans--search" ref={dropSearchRef}>
                    <div className="border_input">
                        <div className="button_change--input">
                            <div className="button__search--size">
                                <BiSearchAlt2 />
                            </div>
                            <div className="box__contain-in">
                                <input
                                    ref={focusValueRef}
                                    type="text"
                                    placeholder="Titles, people, movies"
                                    onChange={handleLocationSearch}
                                    value={value_search}
                                    className={toStateValueBoxSearch.dropdownBoxSearch ? "width_input" : ""}
                                />

                                <div className="btn__reset-input">
                                    <div
                                        className={`border__btn--reset ${btnReset ? "enable_btn-reset" : ""}`}
                                        onClick={handleResetInputSearch}
                                    >
                                        <IoClose />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RenderBoxSearch;
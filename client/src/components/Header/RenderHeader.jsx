
import React, { createContext, Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../error/RenderErrorBounDary';

import Image_name_logo from "../../assets/image-logo/name_logo_cvp-movie.png";
import Image_logo_cvp from "../../assets/image-logo/logo_cvp-movie.png";

import RenderCustomMenu from '../Header/CustomMenu/RenderCustomMenu';
import Picture_avatar_cvp from "../../assets/picture_avatar-cvp/picture_avatar_cvp-movie.png"

import { IoNotifications } from "react-icons/io5";
import { RiAccountCircleFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { IoIosHelpCircle } from 'react-icons/io';
import RenderBoxSearch from './BoxSearch/RenderBoxSearch';
import { MdSearchOff, MdSearch } from 'react-icons/md';
import { ContextFromWindowResize } from '../../views/RenderGetWindowResize';
import RenderUseKeyBoard from '../useKeyBoard/RenderUseKeyBoard';
import Cookies from 'js-cookie';

const RenderBoxNotification = React.lazy(() => import('./BoxNotification/RenderBoxNotification'))
export const DropBtnBoxSearch = createContext();

function RenderHeader() {
    const [scroll, setScroll] = useState(false);
    const [dropdownBoxSearch, setdropdownBoxSearch] = useState(false);
    const [dropdownBoxSel, setdropdownBoxSel] = useState(false);
    const [dropdownBoxNoti, setdropdownBoxNoti] = useState(false);
    const getLocation = window.location.pathname;


    //search
    const handleButtonDropSearchTrue = () => {
        setdropdownBoxSearch(true)
    }
    const handleButtonDropSearchFalse = () => {
        setdropdownBoxSearch(false)
    }

    RenderUseKeyBoard("Escape", handleButtonDropSearchFalse);

    //select
    const handleButtonDrop = () => { setdropdownBoxSel(!dropdownBoxSel); }
    const handleButtonDropFalse = () => { setdropdownBoxSel(false); }



    RenderUseKeyBoard("Escape", handleButtonDropFalse);


    let dropRef = useRef();
    useEffect(() => {
        let hanlder = (e) => {
            if (!dropRef.current.contains(e.target))
                setdropdownBoxSel(false)
        }
        document.addEventListener("mousedown", hanlder);
        return () => document.removeEventListener("mousedown", hanlder);
    });

    const useContextFromWindowSize = useContext(ContextFromWindowResize);


    const handleRemoveTonkenAuth = () => {
        Cookies.remove('TOKEN_AUTH');
        window.location.reload();

    }
    const listItemSelectDrop = [
        {
            nameBtnSelect: "Account",
            linkTo: "/your-account",
            icon_before: <RiAccountCircleFill />,
        },
        {
            nameBtnSelect: "Setting",
            linkTo: "/setting",
            icon_before: <AiFillSetting />,
        },
        {
            nameBtnSelect: "Help center",
            linkTo: "#",
            icon_before: <IoIosHelpCircle />,
        },
        {
            handleLogout: true,
            nameBtnSelect: "Log out",
            linkTo: "#login-out",
            icon_before: <RiLogoutCircleRFill />,
            warning_hover: "waring_hover",
            onclick: handleRemoveTonkenAuth
        },
    ]



    const returnListSelectBtn = listItemSelectDrop.map((index) => {
        return (
            <div
                className={`item_select-drop ${index.warning_hover}`}
                onClick={
                    index.handleLogout ?
                        handleRemoveTonkenAuth
                        :
                        () => setdropdownBoxSel(false)}
                key={index.nameBtnSelect}
            >
                <Link to={index.linkTo} onClick={index.onclick}>
                    {index.icon_before}
                    <span>{index.nameBtnSelect}</span>
                </Link>

            </div>
        )
    });

    // notification
    const handleButtonDropNoti = () => {
        setdropdownBoxNoti(!dropdownBoxNoti);
    }
    const handleButtonDropNotiFalse = () => {
        setdropdownBoxNoti(false);
    }

    let dropNotiRef = useRef();
    useEffect(() => {
        let hanlder = (e) => {
            if (!dropNotiRef.current.contains(e.target))
                setdropdownBoxNoti(false)
        }
        document.addEventListener("mousedown", hanlder);
        return () => document.removeEventListener("mousedown", hanlder);
    });

    RenderUseKeyBoard("Escape", handleButtonDropNotiFalse);


    const valueHeaderToBoxSearch = {
        dropdownBoxSearch,
        setdropdownBoxSearch,
        setScroll,
        scroll,
        getLocation
    }

    return (
        <>
            <DropBtnBoxSearch.Provider value={valueHeaderToBoxSearch}>
                <div className="header">
                    <div className="trow__header--tr">
                        <div className="box_name-logo">
                            <div className="border-logo">
                                <a href="/" >
                                    <img src={Image_name_logo} alt="name" className="img_name" />
                                    <img src={Image_logo_cvp} alt="name" className="img_logo" />
                                </a>
                            </div>
                        </div>

                        {
                            useContextFromWindowSize.getWidthWindow <= 1024 ?
                                <>
                                    <div className="box_menu-heading">

                                    </div>

                                    <div className="box_bottom_navbar-respon box_menu-heading">
                                        <RenderCustomMenu />
                                    </div>
                                </>
                                :
                                <div className="box_menu-heading">
                                    <RenderCustomMenu />
                                </div>

                        }
                        <div className="box_navigation">
                            <div className="row-section--nav">

                                <div className="btn_section">
                                    {
                                        dropdownBoxSearch ?
                                            <button onClick={handleButtonDropSearchFalse} >
                                                <MdSearchOff />
                                            </button>
                                            :
                                            <button onClick={handleButtonDropSearchTrue} >
                                                <MdSearch />
                                            </button>
                                    }



                                </div>
                                <div className="btn_section btn_section_notification" ref={dropNotiRef}>
                                    <button onClick={handleButtonDropNoti}>
                                        <IoNotifications />
                                    </button>

                                    <div className={`box_drops-notification ${dropdownBoxNoti ? "activeDropHeader" : "inactiveDropHeader"}`}>
                                        <Suspense fallback={<>loading...</>}>
                                            <RenderBoxNotification />
                                        </Suspense>

                                    </div>

                                </div>
                                {
                                    useContextFromWindowSize.getWidthWindow <= 425 ? "" :
                                        <div className="btn_dropdown-account" ref={dropRef}>
                                            <button className="border-drop" onClick={handleButtonDrop}>
                                                <img src={Picture_avatar_cvp} alt="avatar" />
                                            </button>
                                            <div className={`box_drops-account ${dropdownBoxSel ? "activeDropHeader" : "inactiveDropHeader"}`}>
                                                <div className="body__drop">
                                                    {returnListSelectBtn}
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <RenderBoxSearch />
            </DropBtnBoxSearch.Provider>
        </>
    )
}

export default withErrorBoundary(RenderHeader, {
    FallbackComponent: RenderErrorBounDary
})
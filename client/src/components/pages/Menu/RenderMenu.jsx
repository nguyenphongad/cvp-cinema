import React, { useEffect } from 'react'
import { AiFillSetting, AiOutlineDoubleRight } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { IoIosHelpCircle } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { RiHistoryLine, RiLogoutCircleRFill } from 'react-icons/ri'
import { TbHistory } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import Avatar_account from "../../../assets/picture_avatar-cvp/picture_avatar_cvp-movie.png"


const LIST_ITEM_SELECT_MENU_MOBILE = [
    {
        id: 1,
        titleNameSelect: "Book tickets history",
        iconNameSelect: <RiHistoryLine />,
        linkTo: "/booking-tickets-history",
    },
    {
        id: 2,
        titleNameSelect: "Viewing activity",
        iconNameSelect: <TbHistory />,
        linkTo: "#",
    },
    {
        id: 3,
        titleNameSelect: "Notification",
        iconNameSelect: <IoNotifications />,
        linkTo: "/notification",
    },
    {
        id: 4,
        titleNameSelect: "Setting",
        iconNameSelect: <AiFillSetting />,
        linkTo: "/setting",

    },
    {
        id: 5,
        titleNameSelect: "Help center",
        iconNameSelect: <IoIosHelpCircle />,
        linkTo: "#",
    },
    {
        id: 6,
        titleNameSelect: "Log out",
        iconNameSelect: <RiLogoutCircleRFill />,
        linkTo: "#",
        addClassName: "waring_log_out",
        booLOutLine_right: true
    },
]

function RenderMenu() {
    useEffect(() => {
        document.title = "Menu | CVP-MOVIE"
    })

    const returnListSelectMobile = LIST_ITEM_SELECT_MENU_MOBILE.map((index) => {
        return (
            <Link
                to={index.linkTo}
                className="item_select_menu-mobile"
                key={index.id}>
                <div className={`szing-left_outline ${index.addClassName}`}>
                    {index.iconNameSelect}
                    {index.titleNameSelect}
                </div>
                {
                    index.booLOutLine_right ? ""
                        : <div className="icon_outline-right">
                            <AiOutlineDoubleRight />
                        </div>
                }
            </Link>
        )
    })

    return (
        <div className="wrap_menu animation_scale-lg">
            <div className="body__menu">
                <div className="heading_text">
                    <BiMenu />
                    MENU
                </div>
                <Link to="/your-account" className="preview__box-account">
                    <div className="row__preview">
                        <div className="border_image-avatar">
                            <img src={Avatar_account} alt="avatar-account" />
                        </div>
                    </div>
                    <div className="td-name_account">
                        Nguyen Van Phong
                    </div>
                </Link>
                {returnListSelectMobile}


            </div>
        </div>
    )
}

export default RenderMenu
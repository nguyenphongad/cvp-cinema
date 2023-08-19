import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import { MdInfoOutline } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgDetailsMore } from 'react-icons/cg'

import Image_cinema_cgv from "../../../../assets/image-logo-cinema/logo_cgv.jpg"
import Image_cinema_beta from "../../../../assets/image-logo-cinema/logo_beta.jpg"

import LoadingRoute from "../../../../views/LoadingRoute"
import { BiFilterAlt } from 'react-icons/bi'

function RenderBookTicketsHistory() {

    document.title = "Book tickets history | CVP-MOVIE";

    const listTicketsBooked = [
        {
            id: 1,
            titleFilm: "avatar : dong chay cua nuoc",
            srcImageCinema: Image_cinema_cgv,
            cinameBooked: "CGV GÒ VẤP",
            timeBooked: "19:34",
            dateBooked: "16/05/2023",
            totalUnitPrice: 130000,
            status_used: false,

            durationFilm: "2H 12P",
            selectedChair: "I3",
            theaterBooked: "P4",
            ticketsCode: 8253749254836489,

        },
        {
            id: 2,
            titleFilm: "Bup be goi hon",
            srcImageCinema: Image_cinema_beta,
            cinameBooked: "Beta Quang Trung",
            timeBooked: "08:34",
            dateBooked: "10/12/2022",
            totalUnitPrice: 160000,
            status_used: true,

            durationFilm: "2H 12P",
            selectedChair: "I3" + " | " + "I4",
            theaterBooked: "P4",
            ticketsCode: 4253749234236489,

        },
        {
            id: 3,
            titleFilm: "Meo di hia",
            srcImageCinema: Image_cinema_beta,
            cinameBooked: "Beta Quang Trung",
            timeBooked: "23:12",
            dateBooked: "10/11/2022",
            totalUnitPrice: 80000,
            status_used: true,

            durationFilm: "2H 12P",
            selectedChair: "I3",
            theaterBooked: "P4",
            ticketsCode: 392374922343289,

        },
    ]
    const vnd = new Intl.NumberFormat("vi-VN", {
        style: 'currency', currency: 'VND'
    });


    const [loadingBookingHistory, setloadingBookingHistory] = useState(true);
    useEffect(() => {
        if (loadingBookingHistory) {
            setTimeout(() => {
                setloadingBookingHistory(false);
            }, 1500)
        }
    }, [loadingBookingHistory]);

    const returnListTicketsBooked = listTicketsBooked.map((index) => {
        return (
            <div className="item__ticket_booked" key={index.id}>
                <div className="item_flex_wrap border_img">
                    <img src={index.srcImageCinema} />
                </div>
                <div className="item_flex_wrap infomation_tickets">
                    <div className="title_film">
                        {index.titleFilm.toUpperCase()}
                    </div>
                    <div className="duction-information">
                        <div className="cinema_style">
                            {index.cinameBooked}
                        </div>

                    </div>
                </div>
                <div className="item_flex_wrap line_trow-notepad">
                    <div className="time_tickets">
                        {index.timeBooked}  {index.dateBooked}
                    </div>
                    <div className="total_unit">
                        {vnd.format(index.totalUnitPrice)}
                    </div>

                </div>
                <div className="item_flex_wrap status_used">
                    {
                        index.status_used ?
                            <span>
                                USED TICKETS
                            </span>
                            :
                            <></>
                    }
                </div>
            </div>
        )
    });

    return (
        <div className='wrap__booking-history animation_scale-lg'>
            <div className="body_book-history-tickets">
                <div className="heading_text">
                    <Link to="/book-tickets">
                        <AiOutlineDoubleLeft />
                        BOOK TICKETS
                    </Link>
                </div>
                <div className="content_booking-hitory-tickets">

                    <div className="head__taskbar-filter">
                        <div className="tbody__taskbar">
                            <div className="item__tab_type-order">
                                <button>
                                    BOOKING TICKETS HISTORY
                                </button>
                            </div>
                        </div>
                        <div className="tbox_filter-result">
                            <button className='btn__filter-history'>
                                <BiFilterAlt />
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className='content_result-filter'>
                        <div className="text_warning-store-his">
                            <MdInfoOutline />
                            Only store history for 60 day
                        </div>
                        {
                            loadingBookingHistory ?
                                <LoadingRoute /> :
                                <div className="body__result_tickets animation_scale-lg">
                                    {returnListTicketsBooked}
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderBookTicketsHistory
import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'

import Image_poster_upcoming_1 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_chi-chi-em-em.jpg"
import Image_poster_upcoming_2 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_crayon-shinchan-the-movie-the-tornado-legend-of-ninja-mononoke.jpg"
import Image_poster_upcoming_3 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_creed-iii.jpg"
import Image_poster_upcoming_4 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_knock-at-the-cabin.jpg"
import Image_poster_upcoming_5 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_m3gan.jpg"
import Image_poster_upcoming_6 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_men-of-plastic.jpg"
import Image_poster_upcoming_7 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_midnight-horror.jpg"
import Image_poster_upcoming_8 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-UPCOMING/image_the-super-mario-bros-movie.jpg"

import { ContextFromWindowResize } from '../../../../views/RenderGetWindowResize'
import RenderItemBookTickets from '../ItemBoxBookTickets/RenderItemBookTickets'

const listFilmBookUpcoming = [
    {
        id: 1,
        titleFilm: "chi chi em em",
        srcImagePoster: Image_poster_upcoming_1,
        limitOld: "16+",

        dateMovieFilm: "11/03",
        toPage: "",
    },
    {
        id: 2,
        titleFilm: "shin cau be but chi : truyen thuyet nhan thuat ninja",
        srcImagePoster: Image_poster_upcoming_2,
        limitOld: "8+",

        dateMovieFilm: "22/02",
        toPage: "",
    },
    {
        id: 3,
        titleFilm: "tay dam huyen thoai 3",
        srcImagePoster: Image_poster_upcoming_3,
        limitOld: "14+",

        dateMovieFilm: "22/01",
        toPage: "",
    },
    {
        id: 4,
        titleFilm: "tieng go o can nha go",
        srcImagePoster: Image_poster_upcoming_4,
        limitOld: "18+",

        dateMovieFilm: "09/07",
        toPage: "",
    },
    {
        id: 5,
        titleFilm: "m3gan",
        srcImagePoster: Image_poster_upcoming_5,
        limitOld: "18+",

        dateMovieFilm: "13/03",
        toPage: "",
    },
    {
        id: 6,
        titleFilm: "ong trum mong ma",
        srcImagePoster: Image_poster_upcoming_6,
        limitOld: "12+",

        dateMovieFilm: "06/01",
        toPage: "",
    },
    {
        id: 7,
        titleFilm: "4 dem mat ngu",
        srcImagePoster: Image_poster_upcoming_7,
        limitOld: "12+",

        dateMovieFilm: "02/01",
        toPage: "",
    },
    {
        id: 8,
        titleFilm: "anh em super mario",
        srcImagePoster: Image_poster_upcoming_8,
        limitOld: "12+",

        dateMovieFilm: "07/04",
        toPage: "",
    },
]

function RenderBookTicketsUpcoming() {
    const returnListBookTicketsUpcoming = listFilmBookUpcoming.map((index) => {
        return (
            <RenderItemBookTickets
                key={index.id}
                srcImagePoster={index.srcImagePoster}
                title={index.titleFilm}
                titleFilm={index.titleFilm}
                dateMovieFilm={index.dateMovieFilm}
                limitOld={index.limitOld}
            >

            </RenderItemBookTickets>
        )
    })
    const useContextFromWindowSize = useContext(ContextFromWindowResize)
    const [numberToSlide, setnumberToSlide] = useState(5)
    useEffect(() => {
        if (useContextFromWindowSize.getWidthWindow <= 1150 && useContextFromWindowSize.getWidthWindow > 1050) {
            setnumberToSlide(4)
        } else if (useContextFromWindowSize.getWidthWindow <= 1050) {
            setnumberToSlide(3)
        } else {
            setnumberToSlide(5)
        }
    }, [useContextFromWindowSize.getWidthWindow])


    return (
        <>
            <div className="wrap_border_content-tab-booking animation_scale-lg">
                <Slider
                    dots={true}
                    slidesToScroll={1}
                    slidesToShow={numberToSlide}
                    infinite={false}
                    swipeToSlide={true}
                >
                    {returnListBookTicketsUpcoming}
                </Slider>
            </div>
        </>
    )
}

export default RenderBookTicketsUpcoming;
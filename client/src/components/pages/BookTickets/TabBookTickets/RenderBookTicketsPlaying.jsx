import React, { useContext, useEffect, useState } from 'react'

import Slider from 'react-slick'
import RenderItemBookTickets from '../ItemBoxBookTickets/RenderItemBookTickets'
import { ContextFromWindowResize } from '../../../../views/RenderGetWindowResize'
import { ContextFromTabPlaying } from './ContextTabBookTicketsPlaying'
import { Outlet } from 'react-router-dom'

function RenderBookTicketsPlaying() {
    const useContextFromtabPlaying = useContext(ContextFromTabPlaying);

    const returnListBookTicketsPlaying = useContextFromtabPlaying.LIST_FILM_BOOK_PLAYING.map((index) => {


        return (
            <RenderItemBookTickets
                key={index.id}
                srcImagePoster={index.srcImagePoster}
                title={index.titleFilm}
                titleFilm={index.titleFilm}
                dateMovieFilm={index.dateMovieFilm}
                favoriteDegree={index.favoriteDegree}
                limitOld={index.limitOld}
                toLink={`./${index.titleFilmEnglish.replace(/ /g, '-')}-${index.id}`}
                handleClickModal={() => useContextFromtabPlaying.setIsModalPreviewMovies(true)}
            >
            </RenderItemBookTickets>
        )
    })

    const useContextFromWindowSize = useContext(ContextFromWindowResize)
    const setWidthUseEffect = useContextFromWindowSize.getWidthWindow;

    let numberToSlideBookTickets = 5
    if (setWidthUseEffect > 1150) numberToSlideBookTickets = 5
    else if (setWidthUseEffect <= 1150 && setWidthUseEffect > 875) numberToSlideBookTickets = 4
    else if (setWidthUseEffect <= 875 && setWidthUseEffect > 710) numberToSlideBookTickets = 3
    else if (setWidthUseEffect <= 710) numberToSlideBookTickets = 2

    return (
        <>
            <div className="wrap_border_content-tab-booking animation_scale-lg">
                <Slider
                    dots={true}
                    slidesToScroll={1}
                    slidesToShow={numberToSlideBookTickets}
                    infinite={false}
                    swipeToSlide={true}
                >
                    {returnListBookTicketsPlaying}
                </Slider>
                <Outlet />

            </div>
        </>
    )
}

export default RenderBookTicketsPlaying
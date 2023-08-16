import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RenderFuncGetIdMovies from '../../FunctionGetIdMovies/RenderFuncGetIdMovies';
import RenderHandleBookSeats from './HandleBookSeats/RenderHandleBookSeats';
import RenderBookingSeatsSteps from './BookingSteps/RenderBookingSeatsSteps';

const RenderLayoutBookSeats = () => {

    const { getIdMovies, LIST_ARRAY_MOVIE } = RenderFuncGetIdMovies(12);

    const isReturnLayoutGetIdMovies = getIdMovies === "";

    const toNavigate = useNavigate();
    useEffect(() => {
        if (isReturnLayoutGetIdMovies) {
            toNavigate("../book-tickets");
        } else {
            document.title = ` BOOK SEATS FOR ${LIST_ARRAY_MOVIE.titleFilm.toUpperCase()}` + " | CVP-MOVIE";
        }
    }, [getIdMovies]);


    return isReturnLayoutGetIdMovies ? undefined : (
        <>
            <RenderBookingSeatsSteps />
            <div className='wrap_book_seat animation_scale-lg'>
                <RenderHandleBookSeats />
            </div>

        </>
    )
}

export default RenderLayoutBookSeats;
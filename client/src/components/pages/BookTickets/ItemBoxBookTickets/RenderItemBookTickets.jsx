import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function RenderItemBookTickets(props) {
    return (
        <Link
            className="item_box_book-tickets"
            key={props.id}
            onClick={props.handleClickModal}
            to={props.toLink}
        >
            <div className="body_background_book-tickets">
                <div className='border_image-poster'>
                    <img src={props.srcImagePoster} alt={props.titleFilm.toLocaleUpperCase()}/>
                </div>
                <div className="title_film" title={props.titleFilm.toLocaleUpperCase()}>
                    {props.titleFilm.toLocaleUpperCase()}
                </div>
                <div className="info-film">
                    <div className="date_movie">{props.dateMovieFilm}</div>

                    <div className="favorite-degree">
                        <AiFillLike />
                        {props.favoriteDegree}
                    </div>
                </div>
                <div className="border__limit-old">
                    {props.limitOld}
                </div>
            </div>
        </Link>
    )
}

export default RenderItemBookTickets;
import { Modal, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx"
import { AiFillLike, AiOutlineClose } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import RenderBookGetDateFilm from "../TabBookTickets/GetDateBookTickets/RenderBookGetDateFilm";
import RenderUseKeyBoard from "../../../useKeyBoard/RenderUseKeyBoard";
import RenderFuncGetIdMovies from "../FunctionGetIdMovies/RenderFuncGetIdMovies";

const RenderModalPreviewPlaying = () => {

    const returnFuncListPreviewMovie = RenderFuncGetIdMovies(14);

    const listArrOjectMovies = returnFuncListPreviewMovie.LIST_ARRAY_MOVIE;

    const getUseContextFromTabplaying = returnFuncListPreviewMovie.useDataBook;

    document.title = `${listArrOjectMovies.titleFilm.toUpperCase()}` + " | CVP-MOVIE";

    const handleGoBackModal = useNavigate();
    const handleCloseModalPreview = () => {
        getUseContextFromTabplaying.setIsModalPreviewMovies(false);
        setTimeout(() => handleGoBackModal("/book-tickets"), 300)
    }

    const [isOpenModalInTrailer, setisOpenModalInTrailer] = useState(false)

    const handleOpenModalTrailer = () => {
        setisOpenModalInTrailer(true)
    }
    const handleCloseModalTrailer = () => {
        setisOpenModalInTrailer(false)
    }
    RenderUseKeyBoard("Escape", handleCloseModalTrailer)

    const [isTimeSkeleton, setIsTimeSkeleton] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsTimeSkeleton(false)
        }, 1500)
    })

    return (
        <Modal
            title="MOVIES INFORMATION"
            open={getUseContextFromTabplaying.isModalPreviewMovies}
            footer={null}
            className="modal__preview--movies"
            onCancel={handleCloseModalPreview}
            keyboard={!isOpenModalInTrailer}
        >
            <div className="content__preview">
                <div className="body__information-single--film">
                    {
                        isTimeSkeleton ?
                            <>
                                <div className="skeleton__component--modal">
                                    <div className="width__image_intro">
                                        <Skeleton
                                            active
                                            className='line-skeleton-image' />
                                    </div>
                                    <div className="width__title--line">
                                        <Skeleton
                                            active
                                            className='line-skeleton-title-film' />
                                        <Skeleton
                                            active
                                            className='line-skeleton-title' />
                                        <Skeleton
                                            active
                                            className='line-skeleton-preview' />
                                    </div>


                                </div>
                                <Skeleton
                                    active
                                    className='line-skeleton-test' />
                            </>

                            :
                            <>
                                <div className="flex__nth-firts">
                                    <div className="box_image_poster">
                                        <img
                                            src={listArrOjectMovies.srcImagePoster}
                                            alt={listArrOjectMovies.titleFilm.toUpperCase()}
                                            title={listArrOjectMovies.titleFilm.toUpperCase()}
                                            className="image_preview_size"
                                        />
                                        <div className="border__postiton_btn--trailer">
                                            <button className="btn__trailer" onClick={handleOpenModalTrailer}>
                                                TRAILER
                                            </button>
                                            <div
                                                className={`modal__trailer_item_book--w ${isOpenModalInTrailer ? "display-block" : "display-none"}`}
                                            >
                                                <div className="wrap__close_modal--trailer"
                                                    onClick={handleCloseModalTrailer}
                                                >
                                                    <button id="border__close_modal-trailer">
                                                        <AiOutlineClose />
                                                    </button>
                                                </div>

                                                <div className="border__iframe">
                                                    {
                                                        isOpenModalInTrailer
                                                            ?
                                                            <iframe
                                                                src={listArrOjectMovies.srcYoutubeTrailer}
                                                                title={listArrOjectMovies.titleFilm.toUpperCase()}
                                                                rameborder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                allowfullscreen="1"
                                                            >
                                                            </iframe>
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line_information-film">
                                        <div className="size_title-film">
                                            {listArrOjectMovies.titleFilm.toUpperCase()}
                                        </div>
                                        <div className="title_film-EL">
                                            {listArrOjectMovies.titleFilmEnglish.toUpperCase()}
                                            <RxDotFilled />
                                            {listArrOjectMovies.movieDuration} MINUTE
                                        </div>
                                        <div className="leading_relaxed">
                                            <BsCardText />
                                            <div className="content_leadding-rel">
                                                {listArrOjectMovies.leading_relax.toUpperCase()}
                                            </div>

                                        </div>
                                        <div className="state-information">
                                            <div className="item_state">
                                                <div className="heading_state">FAVORITE</div>
                                                <div className="result_state">
                                                    <AiFillLike />
                                                    {listArrOjectMovies.favoriteDegree}
                                                </div>
                                            </div>
                                            <div className="item_state">
                                                <div className="heading_state">SHOW DATE</div>
                                                <div className="result_state">{listArrOjectMovies.dateMovieFilm}</div>
                                            </div>
                                            <div className="item_state">
                                                <div className="heading_state">AGE LIMIT</div>
                                                <div className="result_state">{listArrOjectMovies.limitOld}</div>
                                            </div>
                                            <div className="item_state">
                                                <div className="heading_state">NATION</div>
                                                <div className="result_state">{listArrOjectMovies.nationFilm.toUpperCase()}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {<RenderBookGetDateFilm />}
                            </>
                    }

                    {/* <RenderCommentReviewFilm/> */}

                    <Skeleton
                        active
                        className='line-skeleton-test' />
                    <Skeleton
                        active
                        className='line-skeleton-test' />
                    <Skeleton
                        active
                        className='line-skeleton-test' />
                </div>
            </div>
        </Modal>
    )
}

export default RenderModalPreviewPlaying
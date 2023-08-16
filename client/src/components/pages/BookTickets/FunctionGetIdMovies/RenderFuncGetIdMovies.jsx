import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ContextFromTabPlaying } from "../TabBookTickets/ContextTabBookTicketsPlaying";


const RenderFuncGetIdMovies = (numberPathNameSlice) => {

    const useDataBook = useContext(ContextFromTabPlaying);

    const LIST_BOOK_TICKETS_PLAYING = useDataBook.LIST_FILM_BOOK_PLAYING;

    const getPathname = useLocation();
    const getIdMovies = getPathname.pathname.slice(numberPathNameSlice);

    const getIndexArrayListPlaying = LIST_BOOK_TICKETS_PLAYING.findIndex(
        item => item.titleFilmEnglish.replace(/ /g, '-') + "-" + item.id === getIdMovies
    )
    const LIST_ARRAY_MOVIE = LIST_BOOK_TICKETS_PLAYING[getIndexArrayListPlaying];

    const resultGetList = {
        getIdMovies: getIdMovies,
        LIST_ARRAY_MOVIE: LIST_ARRAY_MOVIE,
        useDataBook :useDataBook
    }

    return resultGetList;
}

export default RenderFuncGetIdMovies;
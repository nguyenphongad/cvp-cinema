import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Image_poster_playing_1 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-suzume-no-tojimari.jpg"
import Image_poster_playing_2 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-the-house-of-no-man.jpg"
import Image_poster_playing_3 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-avatar-the-way-of-water.jpg"
import Image_poster_playing_4 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-big-trip-2-special-delivery.jpg"
import Image_poster_playing_5 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-jailangkung-sandekala.jpg"
import Image_poster_playing_6 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-gangnam-zombie.jpg"
import Image_poster_playing_7 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-jackpot-island.jpg"
import Image_poster_playing_8 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-puss-in-boots-the-last-wish.jpg"


export const ContextFromTabPlaying = createContext();

const LIST_FILM_BOOK_PLAYING = [
    {
        id: 1,
        titleFilm: "khoa chat cua nao suzume",
        titleFilmEnglish: "suzume no tojimari",
        srcImagePoster: Image_poster_playing_1,
        limitOld: "6+",
        leading_relax: "Suzume, 17 tuoi, mo coi me tu nho. Tren duong den truong, co gap mot chang trai bi an. Nhung su to mo cua co ay da gay ra mot tai hoa gay nguy hiem cho toan bo nguoi dan Nhat Ban, vi vay Suzume bat dau cuoc hanh trinh de giai quyet moi viec.",
        movieDuration: "121",
        favoriteDegree: "91%",
        dateMovieFilm: "10/03/2023",
        nationFilm : "Japan",
        srcYoutubeTrailer : "https://www.youtube.com/embed/8QkS6hxAAik"
    },
    {
        id: 2,
        titleFilm: "nha ba nu",
        titleFilmEnglish: "the house of no man",
        srcImagePoster: Image_poster_playing_2,
        limitOld: "16+",
        leading_relax: "Cau chuyen xoay quanh gia dinh ba nu gom ba the he song cung nhau trong mot ngoi nha Ba Nu mot tay cang dang moi su noi tieng voi quan banh canh cua va cung khet tieng voi viec kiem soat cuoc song cua tat ca moi nguoi tu con gai den con re moi chuyen dien ra binh thuong cho den khi co con gai ut si me anh chang dien trai xuat than tu mot gia dinh giau co truyen phim khac hoa moi quan he phuc tap da chieu xay ra voi cac thanh vien trong gia dinh cau tagline thong diep: 'Chinh ai cuung co loi nhung ai cung nghi minh la nan nhan'. Chua nhieu an y ve noi dung bo phim muon gui gam.",
        movieDuration: "102",
        favoriteDegree: "83%",
        dateMovieFilm: "22/01/2023",
        nationFilm : "Vietnam",
        srcYoutubeTrailer :"https://www.youtube.com/embed/IkaP0KJWTsQ"
    },
    {
        id: 3,
        titleFilm: "avatar : dong chay cua nuoc",
        titleFilmEnglish: "avatar-the way of water",
        srcImagePoster: Image_poster_playing_3,
        limitOld: "18+",
        leading_relax: "Lay boi canh sau hon mot thap ky ke tu phan phim dau tien Avatar Dong Chay Cua Nuoc ke ve cau chuyen cua gia dinh Sully Jake Neytiri va con cua ho nhung van de xung quanh ho nhung no luc de bao ve su an toan cua gia dinh nhung cuoc chien sinh ton va nhung hiem hoa ma ho phai doi mat.",
        movieDuration: "190",
        favoriteDegree: "90%",
        dateMovieFilm: "13/02/2022",
        nationFilm : "usa",
        srcYoutubeTrailer : "https://www.youtube.com/embed/oeRG9A6bDdY"
    },
    {
        id: 4,
        titleFilm: "chuyen di nho doi : tieu doi gau bay",
        titleFilmEnglish: "big trip 2 special delivery",
        srcImagePoster: Image_poster_playing_4,
        limitOld: "6+",
        leading_relax: "Don Giang Sinh tren khinh khi cau chinh thuc tro thanh “idea” dinh nhat duoc thuc hien tai cac rap tren toan quoc chi co o Chuyen Di Nho Doi Tieu Doi Gau Bay.",
        movieDuration: "90",
        favoriteDegree: "60%",
        dateMovieFilm: "11/03/2023",
        nationFilm: "usa",
        srcYoutubeTrailer : "https://www.youtube.com/embed/qOP_CkRmfKQ"
    },
    {
        id: 5,
        titleFilm: "bup be goi hon",
        titleFilmEnglish: "jailangkung sandekala",
        srcImagePoster: Image_poster_playing_5,
        limitOld: "18+",
        leading_relax: "Jailangkung Bup Be Goi Hon la cau chuyen xoay quanh mot gia dinh nho dang di du lich ra khoi thanh pho Ho khong luong truoc duoc tai hoa se ap den khi di duong vong den mot ho nuoc gan do Tai day dua con trai nho ten la Kinan Muzakki Ramdhan dot nhien mat tich day bi an vao luc mat troi lan Thu duy nhat ho co duoc la mot hinh nhan bup be Jailangkung ke tu day ca gia dinh lien tiep vuong vao nhung noi kinh hoang bi an khong the giai dap Chuyen gi da xay ra voi Kinan Lieu gia dinh nay co the tim thay dua con da mat tich?",
        movieDuration: "92",
        favoriteDegree: "45%",
        dateMovieFilm: "27/02/2023",
        nationFilm: "Thailand",
        srcYoutubeTrailer : "https://www.youtube.com/embed/tvhCnLgYPOQ"
    },
    {
        id: 6,
        titleFilm: "gangnam - that thu",
        titleFilmEnglish: "gangnam zoombie",
        srcImagePoster: Image_poster_playing_6,
        limitOld: "16+",
        leading_relax: "Khi bay xac song dien cuong tan cong khu pho Gangnam cua Han Quoc Mac ket voi bay xac song trong toa nha o khu pho Gangnam noi tieng chuyen gi se xay ra Hanh trinh song sot day kich tinh trong Gangnam That Thu bo phim mang lai lan gio moi trong dong phim xac song.",
        movieDuration: "112",
        favoriteDegree: "28%",
        dateMovieFilm: "09/08/2023",
        nationFilm : "korean",
        srcYoutubeTrailer : "https://www.youtube.com/embed/zjrC1NK5Le4"
    },
    {
        id: 7,
        titleFilm: "dao doc dac",
        titleFilmEnglish: "jackpot island",
        srcImagePoster: Image_poster_playing_7,
        limitOld: "18+",
        leading_relax: "“Dao doc dac Tu mau Thien linh cai” tiep tuc gieo rac noi am anh lan loat dau hoi lon ve mot trong nhung loai bua ngai dang so cua vung Dong Nam A Ai moi thuc su la nguoi dang “an nap” dang sau guong mat ta ac quy di va nam giu nhung bi mat kinh hoang Mot hon dao chet choc cung su xuat hien bi an ron nguoi cua nhan ngu ki quai co lien quan gi den loai bua ngai tan bao va kinh hai nay?",
        movieDuration: "94",
        favoriteDegree: "90%",
        dateMovieFilm: "18/02/2022",
        nationFilm: "Vietnam",
        srcYoutubeTrailer : "https://www.youtube.com/embed/u3kHUaQgrGw"
    },
    {
        id: 8,
        titleFilm: "meo di hia : dieu uoc cuoi cung",
        titleFilmEnglish: "puss in boots the last wish",
        srcImagePoster: Image_poster_playing_8,
        limitOld: "6+",
        leading_relax: "Meo Di Hia da phat hien ra rang niem dam me phieu luu cua minh da dot het 8 mang trong so 9 mang song von co Vi vay trong chuyen phieu luu de khoi phuc lai 9 mang song lan nay se cang thang hon bao gio het.",
        movieDuration: "108",
        favoriteDegree: "96%",
        dateMovieFilm: "11/01/2023",
        nationFilm : "usa",
        srcYoutubeTrailer : "https://www.youtube.com/embed/ixFHgfKr39Y"
    },
]

const ContextTabBookTicketsPlaying = ({ children }) => {
    const [isModalPreviewMovies, setIsModalPreviewMovies] = useState(true)
    
    const valueFromTabBookTickPlaying = {
        LIST_FILM_BOOK_PLAYING,
        isModalPreviewMovies,
        setIsModalPreviewMovies
    }

    return (
        <>
            <ContextFromTabPlaying.Provider value={valueFromTabBookTickPlaying}>
                {children}
            </ContextFromTabPlaying.Provider>

        </>
    )
}

export default ContextTabBookTicketsPlaying;
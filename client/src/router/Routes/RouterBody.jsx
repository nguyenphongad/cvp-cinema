import React, { lazy, startTransition, useEffect, useState } from 'react'
import { Navigate, Outlet, Route, Routes, } from 'react-router-dom'
import NotFound from '../../components/pages/NotFound/NotFound'

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../../components/error/RenderErrorBounDary'
import RenderSearchMain from '../../components/pages/SearchMain/RenderSearchMain'
import RenderSetting from '../../components/Setting/RenderSetting'
import RenderYourAccount from '../../components/YourAccount/RenderYourAccount'
import LoadingRoute from '../../views/LoadingRoute';
import { useContext } from 'react';
import { ContextFromTabPlaying } from '../../components/pages/BookTickets/TabBookTickets/ContextTabBookTicketsPlaying';
import RenderModalPreviewPlaying from '../../components/pages/BookTickets/ModalPreviewFilms/RenderModalPreviewPlaying';

const LazyBookTickets = lazy(() => import('../../components/pages/BookTickets/RenderBookTickets'));
const LazyCinemas = lazy(() => import('../../components/pages/Cinemas/RenderCinemas'));
const LazyLayoutBookSeats = lazy(() => import('../../components/pages/BookTickets/TabBookTickets/BookSeats/RenderLayoutBookSeats'));
const LazyMenu = lazy(() => import('../../components/pages/Menu/RenderMenu'));
const LazyBookTicketsHistory = lazy(() => import('../../components/pages/BookTickets/BookTicketsHistory/RenderBookTicketsHistory'));
import Login from '../../components/authentication/login/Login';
import Register from '../../components/authentication/register/Register';
import { UseAuthContextData } from '../../contexts/AuthContext';

function RouterBody() {
    const useOpenModalPreview = useContext(ContextFromTabPlaying);
    const useDataAuthUser = useContext(UseAuthContextData);

    const returnRouteListBookTicketsPlaying = useOpenModalPreview.LIST_FILM_BOOK_PLAYING.map(index => {
        const pathTitleToLower = index.titleFilmEnglish;
        return (
            <Route
                key={index.id}
                path={`${pathTitleToLower.replace(/ /g, '-')}-${index.id}`}
                element={<RenderModalPreviewPlaying />} />
        )
    })


    const LSIT_ARRAY_ROUTE_BODY = [
        {
            path: "/",
            // element: <LazyHome />,
            element: <Navigate to="/book-tickets" />,
            lazyLoading: true
        },
        {
            path: "/cinemas",
            element: <LazyCinemas />,
            lazyLoading: true
        },
        {
            path: "/book-tickets",
            element: <LazyBookTickets />,
            outletRouter: returnRouteListBookTicketsPlaying,
            lazyLoading: true
        },
        {
            path: "/book-seats",
            element: <LazyLayoutBookSeats />,
            outletRouter: returnRouteListBookTicketsPlaying,
            lazyLoading: true
        },
        {
            path: "/booking-tickets-history",
            element: <LazyBookTicketsHistory />,
            lazyLoading: true
        },
        {
            path: "/menu",
            element: <LazyMenu />,
            lazyLoading: true
        },
        {
            path: "/search",
            element: <RenderSearchMain />,
            lazyLoading: false
        },
        {
            path: "/your-account",
            element: <RenderYourAccount />,
            lazyLoading: false
        },
        {
            path: "/setting",
            element: <RenderSetting />,
            lazyLoading: false
        },
        {
            path: "*",
            element: <NotFound />,
            lazyLoading: false
        },
        // {
        //     path: "/login",
        //     element: <Login />,
        //     lazyLoading: false,
        //     auth: true
        // },
        // {
        //     path: "/register",
        //     element: <Register />,
        //     lazyLoading: false,
        //     auth: true
        // },
    ];

    // console.log("b" + useDataAuthUser.isTokenAuthState);

    const returnArrayRouteBody = LSIT_ARRAY_ROUTE_BODY.map((index) => {
        return (
            <Route key={index.path} path={index.path} element={
                // index.lazyLoading ?
                //     <startTransition>
                <React.Suspense fallback={<LoadingRoute />}>

                    {/* {useDataAuthUser.isTokenAuthState ? index.element :<Navigate to="/login" />} */}
                    {index.element}

                </React.Suspense>
                // </startTransition>
                // :
                // <>{useDataAuthUser.isTokenAuthState ? index.element : <Navigate to="/login"/>}</>

            } >
                {index.outletRouter}
            </Route>
        )
    })

    return (
        <div className="component-routes">
            <Routes>
                {returnArrayRouteBody}
                {/* <Route path="/login" element={useDataAuthUser.isTokenAuthState ? <Navigate to="/" replace /> : <Login />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div >
    )
}

export default withErrorBoundary(RouterBody, {
    FallbackComponent: RenderErrorBounDary
});
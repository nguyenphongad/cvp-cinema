import React, { useState } from 'react'
import Logo_cvp_movie from "../../../assets/image-logo/name_logo_cvp-movie.png"

import RenderFooter from '../../Footer/RenderFooter';

const RenderInterfaceAuth = ({ children }) => {
    const [timeOutCloseFrontIntro, setTimeOutCloseFrontIntro] = useState(true);
    setTimeout(() => {
        setTimeOutCloseFrontIntro(false)
    }, 0)

    return (
        <div className=''>
            <div className='container__authentication'>
                {timeOutCloseFrontIntro ?
                    <div className='front__animation_logo-top'>
                        <div className="wrap__authentication">
                            <div className="text__logo">
                                <img src={Logo_cvp_movie} alt="logo" />
                            </div>
                        </div>
                    </div> :


                    <div className="body_form--auth ">
                        <div>
                            <div className="header__top--empty">
                                <div className="wrap__header__top">
                                    <div className="border__menu">
                                        <img src={Logo_cvp_movie} atl="logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="wrap__body--authencation animation_scale-lg">
                                {children}
                            </div>
                        </div>
                    </div>
                }

            </div>
            {/* <RenderFooter /> */}
        </div>
    )
}

export default RenderInterfaceAuth; 
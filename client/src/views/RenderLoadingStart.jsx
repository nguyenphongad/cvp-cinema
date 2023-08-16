import React from 'react';
import Name_logo_cvp from "../assets/image-logo/name_logo_cvp-movie.png"

function RenderLoadingStart() {
    return (
        <div className="back_dop-fillter">
            <div className="wrap_loading-start">
                <div className="text">
                    <div>
                        <img src={Name_logo_cvp}/>
                    </div>
                    <div className="stage">
                        <div className="dot-spin"></div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default RenderLoadingStart;
import React from 'react'
import RenderGeneral from '../Setting/General/RenderGeneral'
import Avatar_cvp_default from ".././../assets/picture_avatar-cvp/picture_avatar_cvp-movie.png"

function RenderYourAccount() {
    return (
        <div className="wrap__setting">
            <div className="body__setting">
                <div className="tbody__frame-setting">
                    <div className="border_avatar_user">
                        <div className="border-img">
                            <img src={Avatar_cvp_default}/>
                        </div>
                    </div>
                    <RenderGeneral />
                </div>
            </div>
        </div>
    )
}

export default RenderYourAccount
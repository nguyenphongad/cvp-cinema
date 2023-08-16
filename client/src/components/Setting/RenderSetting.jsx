import React, { useEffect } from 'react'
import RenderSettingSystem from './SettingSystem/RenderSettingSystem'

function RenderSetting() {
    useEffect(()=>{
        document.title = "Setting" + " | CVP-MOVIE"
    })
    return (
        <div className="wrap__setting">
            <div className="body__setting">
                <div className="tbody__frame-setting">
                    <RenderSettingSystem/>
                </div>
            </div>
        </div>
    )
}

export default RenderSetting
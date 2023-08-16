import React, { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'

function RenderSettingSystem() {


    const [checkedAutoPlay, setcheckedAutoPlay] = useState(false);
    const handleChecked = () => {
        setcheckedAutoPlay(!checkedAutoPlay);
    }

    const list_setting_general = [
        {
            id: 1,
            nameSet: "Language",
            nameUser: "English (default)",
            SetOnclick: true,
        },
        {
            id: 2,
            nameSet: "Auto Play",
            nameUser: checkedAutoPlay ? "ON" : "OFF",
            SetOnclick: false,
            BtnCheckBox: true,
        },
    ];
    const return_list_setting_general = list_setting_general.map((index) => {
        return (
            <div className="info__tr" key={index.id}>
                <div className="item__info td__name">
                    <div className="th__info">
                        {index.nameSet}
                    </div>
                </div>
                <div className="item__info td__name--user">
                    <div className="text_name--user">
                        {index.nameUser}
                        {index.emailUser}
                    </div>
                </div>
                <div className="item__info td__edit">
                    {index.SetOnclick ? <button>
                        <AiTwotoneEdit />
                        Edit
                    </button> : ""}
                    {index.BtnCheckBox ?
                        <input
                            className="toggleAutoPlay"
                            type="checkbox"
                            name="check-autoplay"
                            onChange={handleChecked}
                            checked={checkedAutoPlay ? true : false}
                        />
                        : ""}
                </div>
            </div>
        )
    })


    return (
        <div className="setting__box">
            <div className="heading_list">Setting System</div>
            <div className="table_box">
                {return_list_setting_general}
            </div>
        </div>
    )
}

export default RenderSettingSystem
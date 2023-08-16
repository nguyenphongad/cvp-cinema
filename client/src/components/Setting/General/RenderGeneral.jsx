import React, { useEffect } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'

function RenderGeneral() {
    useEffect(()=>{
        document.title = "Account" + " | CVP-MOVIE"
    })

    const list_setting_general = [
        {
            id: 1,
            nameSet: "Name",
            nameUser: "Nguyen Van Phong",
            SetOnClick: true,
        },
        {
            id: 2,
            nameSet: "ID CVP",
            emailUser: "10035JU8T8R9",
            SetOnClick: false,
        },
        {
            id: 3,
            nameSet: "Password",
            emailUser: "********",
            SetOnClick: true,
        },
        {
            id: 4,
            nameSet: "Email",
            emailUser: "nguyenphong121@gmail.com",
            SetOnClick: true,
        },
        {
            id: 5,
            nameSet: "Number Phone",
            emailUser: "0986888888",
            SetOnClick: true,
        },
    ]

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
                <div className="item__info just__right td__edit">
                    {index.SetOnClick ? 
                    <button
                    
                    >
                        <AiTwotoneEdit />
                        Edit
                    </button> : ""}
                </div>
            </div>
        )
    })


    return (
        <div className="setting__box">
            <div className="heading_list">Account</div>
            <div className="table_box">
                {return_list_setting_general}
            </div>
        </div>
    )
}

export default RenderGeneral
import React from 'react'
import { BiDialpad } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { BsArrowRight } from 'react-icons/bs';

const RenderBookingSeatsSteps = () => {

    const ARRAY_THIS_STEPS = [
        {
            id: 0,
            content_text: "SEATS",
            icon_steps: <BiDialpad />,
        },
        {
            id: 1,
            content_text: "FOOD & BEVERAGE",
            icon_steps: <IoFastFood />,
        },
        {
            id: 2,
            content_text: "PAYMENT",
            icon_steps: <MdPayment />,
        },
        {
            id: 3,
            content_text: "CONFIRMATION",
            icon_steps: <GiConfirmed />,
        },
    ];


    const returnListStepsTicketing = ARRAY_THIS_STEPS.map((item, index) => {
        return (
            <div key={item.id} className='item_steps'>
                <div className='margin_content_text'>
                    {item.icon_steps}
                    <div className='text_min_step'>
                        {item.content_text}
                    </div>
                </div>
                {
                    index !== ARRAY_THIS_STEPS.length - 1 &&
                    <div className='arrow_right_step'>
                        <BsArrowRight />
                    </div>
                }
            </div>
        )
    })


    return (
        <div className='wrap_steps_booking_tickets'>
            <div className='flex_line_steps'>
                {returnListStepsTicketing}
            </div>
        </div>
    )
}

export default RenderBookingSeatsSteps;
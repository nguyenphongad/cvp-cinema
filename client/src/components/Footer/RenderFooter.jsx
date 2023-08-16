import React from 'react'
import { AiFillTwitterCircle, AiOutlineGift } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { FiHelpCircle } from 'react-icons/fi';
import { IoIosGitNetwork } from 'react-icons/io';
import { SiTeamspeak } from 'react-icons/si';

function RenderFooter() {
    return (
        <footer className="wrap_footer">
            <div className="body__footer">
                <div className="box__infomation-mail">
                    <div className="item_box_column--info icon_rel-us">
                        <a href="#" target="_blank" className="color-f">
                            <BsFacebook />
                            FACEBOOK
                        </a>
                        <a href="#" target="_blank" className="color-i">
                            <RiInstagramFill />
                            INSTAGRAM
                        </a>
                        <a href="#" target="_blank" className="color-t">
                            <AiFillTwitterCircle />
                            TWITTER
                        </a>
                        <a href="#" target="_blank" className="color-y">
                            <IoLogoYoutube />
                            YOUTUBE
                        </a>
                    </div>

                    <div className="item_box_column--info task-work">
                        <div>
                            <a href="#1">
                                <FiHelpCircle />
                                Help Center
                            </a>
                            <a href="#1">
                                <AiOutlineGift />
                                Gift Card
                            </a>
                            <a href="#1">
                                <IoIosGitNetwork />
                                Jobs
                            </a>
                            <a href="#1">
                                <SiTeamspeak />
                                Contact Us
                            </a>
                        </div>
                    </div>

                </div>
                <div className="think_author">
                    <div>
                        DAY LA WEBSITE DAT VE XEM PHIM DEMO CUA MINH VIET BANG REACTJS.
                        WEBSITE CON NHIEU TINH NANG CHUA HOAN THIEN VA BUG
                        RAT NHIEU
                        CHO MINH XIN IT NHAN XET, CAM ON MOI NGUOI ❤️<br />
                        <b style={{ float: "right" }}>
                            <i>CVP - MOVIE | NGUYEN VAN PHONG</i>
                        </b>
                    </div>
                </div>
            </div>
            <div className="box_bottom--license">
                <div className="reading-reserve">
                    © CVP - MOVIE , lnc. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default RenderFooter;
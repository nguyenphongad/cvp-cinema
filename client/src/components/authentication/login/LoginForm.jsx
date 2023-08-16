import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import RenderInputHandle from '../interfaceAuth/RenderInputHandle';

import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import LoadingRoute from '../../../views/LoadingRoute';

const LoginForm = () => {

    const [activeToggleShowPass, setActiveToggleShowPass] = useState(true);
    const handleToggleShowPass = () => {
        setActiveToggleShowPass(!activeToggleShowPass);
    };

    const navigate = useNavigate();


    const [dataForm, setDataForm] = useState({
        email: 'phong@gmail.com',
        password: '123123'
    });

    const [loadingLogin, setLoadingLogin] = useState(false);

    const handleChangeEmail = (e) => {
        setDataForm({ ...dataForm, email: e.target.value });
    };
    const handleChangePassword = (e) => {
        setDataForm({ ...dataForm, password: e.target.value });
    };

    const SubmitLoginForm = async (e) => {
        e.preventDefault();
        setLoadingLogin(true);
        const { email, password } = dataForm;
        try {
            const { data } = await axios.post('http://localhost:7000/login ', {
                email,
                password
            });
            if (data.error) {
                toast.error(data.error)
            } else {
                Cookies.set('TOKEN_AUTH', data.tokenAuth, { expires: 15 });
                setDataForm({});
                toast.success("Login success");
                // navigate('/');
                window.location.reload();

            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoadingLogin(false);
        }
    }



    return (
        <div className="form_ifame_authentication form__login-ifame">
            <div className='form__groups'>
                <div className="heading__text--wg">LOGIN</div>
                <form onSubmit={SubmitLoginForm}>
                    <RenderInputHandle
                        name_label="Email"
                        type="email"
                        name_method="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter email"
                        icon_right={<MdOutlineMailOutline />}
                        value={dataForm.email}
                        onChange={handleChangeEmail}
                    />
                    <RenderInputHandle
                        name_label="Password"
                        type={activeToggleShowPass ? "password" : "text"}
                        name_method="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Enter password"
                        className_pass={`wrap_icon_right ${activeToggleShowPass ? "active_focus_pass" : ""}`}
                        icon_right={<FaRegEye />}
                        icon_handle_pass={<FaRegEyeSlash />}
                        value={dataForm.password}
                        onChange={handleChangePassword}

                        onClickShowPass={handleToggleShowPass}
                    />
                    <div className="nuti_btn_fort-pass">
                        <Link to="../forgot-password">Forgot password</Link>
                    </div>

                    <div className="btn__submit--handle">
                        {loadingLogin ?
                            <>
                                <LoadingRoute />
                            </>
                            :
                            <button type="submit" >
                                <AiOutlineLogin />
                                Login
                            </button>
                        }

                    </div>
                    <div className="group__input option__more">
                        <div>
                            <span>Don't have a CVP-MOVIE account yet? </span>
                            <Link to="../register">Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
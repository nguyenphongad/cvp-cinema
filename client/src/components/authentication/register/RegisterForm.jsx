import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RenderInputHandle from '../interfaceAuth/RenderInputHandle'
import { MdDriveFileRenameOutline, MdOutlineMailOutline } from 'react-icons/md'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { BsPersonAdd } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-toastify'
import LoadingRoute from '../../../views/LoadingRoute'

const RegisterForm = () => {


    const [activeToggleShowPass, setActiveToggleShowPass] = useState(true);
    const handleToggleShowPass = () => {
        setActiveToggleShowPass(!activeToggleShowPass)
    };
    const navigate = useNavigate();
    const [loadingButton, setLoadingButton] = useState(false)

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChangeName = (e) => {
        setDataForm({ ...dataForm, name: e.target.value })
    }
    const handleChangeEmail = (e) => {
        setDataForm({ ...dataForm, email: e.target.value })
    }
    const handleChangePassword = (e) => {
        setDataForm({ ...dataForm, password: e.target.value })
    }

    const SubmitRegisterForm = async (e) => {
        e.preventDefault();
        setLoadingButton(true)
        const { name, email, password } = dataForm;
        try {
            const { data } = await axios.post('http://localhost:7000/register', {
                name, email, password
            });
            console.log(data);
            if (data.error) {
                toast.error(data.error)
            } else {
                setDataForm({});
                toast.success("Register success");
                navigate('/login');
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingButton(false)
        }

    }

    return (
        <div className="form_ifame_authentication form__register-ifame">
            <div className='form__groups'>
                <div className="heading__text--wg">REGISTER</div>
                <form onSubmit={SubmitRegisterForm}>
                    <RenderInputHandle
                        name_label="Name"
                        type="text"
                        name_method="name"
                        id="name"
                        autoComplete="off"
                        placeholder="Enter name"
                        icon_right={<MdDriveFileRenameOutline />}
                        value={dataForm.name}
                        onChange={handleChangeName}
                    />
                    <RenderInputHandle
                        name_label="Email"
                        type="email"
                        name_method="email"
                        id="email"
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
                        className_pass={`wrap_icon_right ${activeToggleShowPass ? "active_focus_pass" : ""}`}
                        autoComplete="off"
                        placeholder="Enter password"
                        icon_right={<FaRegEye />}
                        icon_handle_pass={<FaRegEyeSlash />}
                        value={dataForm.password}
                        onChange={handleChangePassword}

                        onClickShowPass={handleToggleShowPass}
                    />

                    <div className="btn__submit--handle">
                        {loadingButton ?
                            <LoadingRoute />
                            :
                            <button type="submit">
                                <BsPersonAdd />
                                Register
                            </button>
                        }
                    </div>

                </form>
                <div className="group__input">
                    <span>Are you ready to create an account? </span>
                    <Link to="../login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
import React from 'react'
import RenderInterfaceAuth from '../interfaceAuth/RenderInterfaceAuth'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <div>
            <RenderInterfaceAuth>
                <RegisterForm/>
            </RenderInterfaceAuth>
        </div>
    )
}

export default Register
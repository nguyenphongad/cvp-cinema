import React from 'react'
import RenderInterfaceAuth from '../interfaceAuth/RenderInterfaceAuth';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div>
            <RenderInterfaceAuth>
                <LoginForm/>
            </RenderInterfaceAuth>
        </div>
    )
}

export default Login;
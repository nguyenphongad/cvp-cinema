import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react"
import { isTokenExists } from '../helpers/authToken';



export const UseAuthContextData = createContext({});

const UseContextAuth = ({children}) =>{
    const [dataUser,setDataUser] = useState(null);
    const isTokenAuthExists = isTokenExists();


    const [isTokenAuthState, setIsTokenAuthState] = useState(isTokenAuthExists);
    // console.log(isTokenAuthState);s

    useEffect(()=>{
        const fetchDataUser = async ()=>{
            try {
                const authToken = Cookies.get('TOKEN_AUTH');
                if(!authToken){
                    setIsTokenAuthState(false);
                    return;
                }

                const dataResponsive = await axios.get('/profile',{
                    headers:{Authorization: `Bearer ${authToken}`}
                });
                // console.log(dataResponsive)

                if(dataResponsive.data){
                    setDataUser(dataResponsive.data);
                    setIsTokenAuthState(true);
                }


            } catch (error) {
                console.log(error);
                setIsTokenAuthState(false);
            }
        };
        fetchDataUser();
    },[]);

    const valueProvider = {dataUser, setDataUser,isTokenAuthState};

    return (
        <UseAuthContextData.Provider value={valueProvider}>
            {children}
        </UseAuthContextData.Provider>
    )
}

export default UseContextAuth;